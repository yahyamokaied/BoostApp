import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Screen, AppStyle,  AppColor, AppText  } from '../components/styles';
import {AppButton} from '../components/styles/AppButton';
import AuthContext from '../auth/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleFit from 'react-native-google-fit';
import { azureAdAppProps } from '../components/functions/SigmaLoginFunctions';
import * as AuthSession from 'expo-auth-session';
import FastImage from 'react-native-fast-image';


const LogInScreen = ({ navigation }) => {

const {
  azureToken,setAzureToken,
  azureCode,setAzureCode,
  isLoading,setIsLoading
} = useContext(AuthContext);

useEffect(() => {

Platform.select ({
  ios: () => { console.log("IOS PLATFORM") }
,
  android: () =>
    {
    console.log("ANDROID PLATFORM")
    // Check if Google fit authurized
    GoogleFit.checkIsAuthorized()
    }
})();

},[]);





// Sigma Login
const SigmaLogin = async () => {

  console.log("SigmaLogin start");

try {

let res = await openAuthSession(azureAdAppProps);

  if(res) 
  {

    let sToken = String(JSON.stringify(res.access_token));
    let finalToken = sToken.substring(1, sToken.length-1);

    await AsyncStorage.setItem('@access_token_sigma', finalToken );

    console.log("The Refresh token: ",res)
    console.log("The Refresh Code: ",res.refresh_token)

if( res.type !== 'error' || res.type !== 'dismiss')
    setAzureCode( res.refresh_token );
    await AsyncStorage.setItem('@azore_code', res.refresh_token );
    setAzureToken( finalToken );

    console.log("access_token_sigma: ", String(JSON.stringify(res)));
    console.log("finalToken: ", finalToken);

  }
}
catch (error)
{
  console.log("SignIn error",error);
  return null;
}


}


const getToken = async (code, conf) => {
  var requestParams = {
    client_id: conf.clientId,
    response_type: 'code',
    scope: 'user.read',
    code: code,
    redirect_uri: conf.redirectUrl,
    grant_type: conf.grant_type,
  }

  var formBody = [];
  for (var p in requestParams) {
    var encodedKey = encodeURIComponent(p);
    var encodedValue = encodeURIComponent(requestParams[p]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  let tokenResponse = null;
  await fetch(`https://login.microsoftonline.com/${conf.tenantId}/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody,
  })
  .then((response) => response.json())
  .then((response) => {
    tokenResponse = response;
  })
  .catch((error) => {
    console.error(error);
  });
  return await tokenResponse;
};


const openAuthSession = async (conf) => {
const authUrl = `https://login.microsoftonline.com/${conf.tenantId}/oauth2/authorize?client_id=${conf.clientId}&response_type=code&scope=${encodeURIComponent(conf.scope)}&redirect_uri=${encodeURIComponent(conf.redirectUrl)}`;

let authResponse = await AuthSession.startAsync({
    authUrl     :   authUrl,
    returnUrl   :   conf.returnUrl || AuthSession.makeRedirectUri()
  })
  .then((authResponse ) => { 

    console.log("authResponse: ",authResponse);
    console.log("params.code: ",authResponse.params.code);

    if (authResponse.type === "success") { 

          if (authResponse.params["error"] ) {
            return { 
                    "error": authResponse.params.error,
                    ...authResponse
                  };
          } else {
            return getToken(authResponse.params.code, conf);
          }

        } 
        else { 
          return { 
            "error": "Authorization session cancelled",
            ...authResponse
          };
        }
  })
  .catch((error) => {
    console.error(error);
    return { 
        "error" : error , 
        "type": "error"
      };
  });

  return authResponse;
};




return (
<Screen>
  <FastImage
    style={styles.bg}
    source={require('../Assets/images/bg.png')} >
{ !isLoading ?
    <AppButton onPress={() => SigmaLogin() }
              title='Login' position='absolute'
              bottom={AppStyle.hh / 5}
              width={AppStyle.ww / 3}
              backgroundColor={AppColor.BlackColor}
      /> 
      :
      <View style={styles.loading}>
      <AppText.Text3 color={AppColor.WhiteColor} >Loading ...</AppText.Text3>
      </View>
}
        
  </FastImage>
</Screen>
);
};

export default LogInScreen;

const styles = StyleSheet.create({
  bg: {
    width: AppStyle.ww,
    height: AppStyle.hh,
    backgroundColor: AppColor.BlackColor
  },
  loading : {
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute',
    bottom: AppStyle.hh / 5
  }
});