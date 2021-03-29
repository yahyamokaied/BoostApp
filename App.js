import React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from './navigation/NavigationTheme';
import HomeNavigator from './navigation/HomeNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import BackgroundFetch from "react-native-background-fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from "./auth/context";
import AppleHealthKit from 'rn-apple-healthkit';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { LogBox } from 'react-native';
import moment from 'moment';
import codePush from "react-native-code-push";
import jwt_decode from "jwt-decode";
import * as AuthSession from 'expo-auth-session';
import RNBootSplash from "react-native-bootsplash";
import { useFonts } from 'expo-font';

LogBox.ignoreAllLogs();

const App = ({ navigation }) => {

  const [azureCode,setAzureCode] = useState(null);
  const [azureToken,setAzureToken] = useState(null);
  const [googleToken,setGoogleToken] = useState(null);
  const [name,setName] = useState(null);
  const [id,setID] = useState(null);
  const [teamID,setTeamID] = useState(null);
  const [photo,setPhoto] = useState('');
  const [teamName,setTeamName] = useState(null);
  const [dailyStepsTotal,setDailyStepsTotal] = useState(0);
  const [weeklyStepsTotal,setWeeklyStepsTotal] = useState(0);
  const [monthlyStepsTotal,setMonthlyStepsTotal] = useState(0);
  const [weeklySteps,setWeeklySteps] = useState([]);
  const [monthlySteps,setMonthlySteps] = useState([]);
  const [starPoints,setStarPoints] = useState(0);
  const [competitions,setCompetitions] = useState();
  const [lastCompetition,setLastCompetition] = useState();
  const [myTeam,setMyTeam] = useState();
  const [teams,setTeams] = useState();
  const [modalVisible,setModalVisible] = useState(false);
  const [isEditActivity,setIsEditActivity] = useState(false);
  const [pickerActive, setPickerActive] = useState(false);
  const [pickerContent,setPickerContent] = useState(["30","60","90","120","150","180"]);
  const [pickerId,setPickerId] = useState(null);
  const [pickerType,setPickerType] = useState('Press to select');
  const [pickerDuration,setPickerDuration] = useState('Press to select');
  const [pickerIntensity,setPickerIntensity] = useState('Press to select');
  const [pickerDate,setPickerDate] = useState('Press to select');
  const [isDatePicker,setIsDatePicker] = useState(true);
  const [completedActivity,setCompletedActivity] = useState([{"id": " ","activityType": " ","userId": " ","duration": 0,"startTime": "2021-02-15T11:52:38","intensity": "low","uploadedTime": "2021-02-15T10:52:39.42"}]);
  const [allActivities,setAllActivities] = useState(["Aerobics", "Badminton", "Basketball", "Bicycling", "Bowling", "Dance", "Football/soccer", "Golf", "Gymnastics", "Handball", "Hockey", "Ice skate", "Martial arts", "Pilates", "Ping pong", "Rowing", "Running", "Skateboard", "Spinning", "Squash", "Swimming", "Tennis", "Volleyball", "Wrestling", "Yoga"]);
  const [challenges,setChallenges] = useState();
  const [isLoading,setIsLoading] = useState(false);


  const fetchMeconfig = {
    MembershipUrl: 'https://boostapp-membership-api-test.azurewebsites.net',
    competitionUrl: 'https://boostappcompetitionapi.azurewebsites.net',
    challengeUrl: 'https://boostapp-challenge-api.azurewebsites.net',
    stepUrl: 'https://boostappstepapi.azurewebsites.net',
    starPointUrl: 'https://starpoint.azurewebsites.net',
    activityUrl: 'https://boostappactivityapi.azurewebsites.net'
  }

// Fetch in Background
  let taskId = 'com.transistorsoft.fetch'
      useEffect(() => {
        BackgroundFetch.configure({
          minimumFetchInterval: 15,
          forceAlarmManager: false,
          stopOnTerminate: false,
          startOnBoot: true,
        }, async (taskId) => {
          // Tasks will fetch every 15 mint is here
          Platform.select ({
            ios: () => {
              getStepsIOS ();
            },
            android: () =>
            {
              getStepsAndroid ();
            }
        })();
          console.log("BackgroundFetch done: ", taskId);
          BackgroundFetch.finish(taskId);
        }, (error) => {
          console.log(" BackgroundFetch failed to start");
        });
      },[]);

// RestoreSigmaToken
const restoreToken = async () => {

  setIsLoading(true);

try {
  
  console.log('restoreToken');
  var tokenValue = await AsyncStorage.getItem('@access_token_sigma');
  if(tokenValue.type === 'error' || !tokenValue)  { console.log('! tokenValue');    setAzureToken(null); return null };
  var decoded = jwt_decode(tokenValue);
  let authState = JSON.parse( String(JSON.stringify(decoded)) );
  if(!authState) { console.log('! authState');   setAzureToken(null); return null };
  if (authState) {
    console.log('there is authState: ',authState);
    if (checkIfTokenExpired(authState))
    { 
       const azureAdAppProps = {
        clientId        :   '0ba22465-fda2-483d-98fe-f9ee6dd5d2cd',
        tenantId        :   'f82b0fb7-0101-410d-8e87-0efa7c1d3978',
        scope           :   ['user.read'],
        domainHint      :   'login.microsoftonline.com',
        redirectUrl     :   AuthSession.makeRedirectUri({ native:'se.sigma.BoostApp20://redirect'}),
        clientSecret    :   'DiGF4Yz6D_4A1.DB5QJ-I6yQz6-_5V55nI',
        prompt          :   'login',
        grant_type      :   'refresh_token',
        returnUrl: 'se.sigma.BoostApp20://redirect',
      };

      var azorecode = await AsyncStorage.getItem('@azore_code');
      const nToken = await getToken(azorecode, azureAdAppProps);
      console.log('there is refreshed token: ',nToken);
      let sToken = String(JSON.stringify(nToken.access_token));
      let finalToken = sToken.substring(1, sToken.length-1);
      console.log('token after refresh: ',finalToken);
      await AsyncStorage.setItem('@access_token_sigma', finalToken );
      setAzureToken( finalToken );
      setIsLoading(false);
      return finalToken;

   } 
     else
    {
      console.log("Restored Token: ",tokenValue);
      setAzureToken(tokenValue);
      setIsLoading(false);
      return tokenValue;
    } 
  }

} catch (error) {
  console.log('restoreToken error : ',error);
  setAzureToken(null);
  setIsLoading(false);
  return null;
  
}

}


function checkIfTokenExpired({ exp }) {
  console.log('token exp: ',exp)
  let time = +exp + '000';
  return new Date(parseInt(time)) < new Date();
}


const getToken = async (code, props) => {
  var requestParams = {
    client_id: props.clientId,
    response_type: 'code',
    scope: 'user.read',
    refresh_token: code,
    redirect_uri: props.redirectUrl,
    grant_type: 'refresh_token',
  }
  var formBody = [];
  for (var p in requestParams) {
    var encodedKey = encodeURIComponent(p);
    var encodedValue = encodeURIComponent(requestParams[p]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  let tokenResponse = null;
  await fetch(`https://login.microsoftonline.com/${props.tenantId}/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
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

  useEffect(() => {
    restoreToken();

    const init = async () => {
      // …do multiple sync or async tasks
try {
  const [loaded] = useFonts({
    BWBold: require('./Assets/fonts/BWBold.otf'),
    BWRegular: require('./Assets/fonts/BWRegular.otf'),
    BWMedium: require('./Assets/fonts/BWMedium.otf')
  });
} catch (error) {
  console.log('font load error',error)
}


      console.log('fonts loaded')


    };
   

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");

    });


},[]);

useEffect(() => {
  Platform.select ({
    ios: () => {
      getStepsIOS ();
    },
    android: () =>
    {
      getStepsAndroid();
    }
})();

  fetchMe();
  fetchSteps();
  fetchStarPoints();
  fetchCompetitions();
  fetchChallenges();
  fetchMyTeam();
  fetchPhoto();
  fetchMyTeamMembers();
  fetchCompletedActivity();

  fetchAllActivities();

},[azureToken]);

const getStepsAndroid = () => {
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BODY_READ,
    ],
};

GoogleFit.authorize(options)
  .then ((res) => {
  console.log('authorized >>>', res);
GoogleFit.startRecording((callback) => {
          console.log('callback >>>', callback)
  
          let Day = new Date().getDate().toString()
          let Month = (new Date().getMonth()).toString()
          let Year = new Date().getFullYear().toString()

/* startDate: "2017-01-01T00:00:17.971Z", // required ISO8601Timestamp */

const options = {
      startDate: (new Date(Year,Month,Day)).toISOString(), // required ISO8601Timestamp
      endDate: new Date().toISOString(), // required ISO8601Timestamp
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    };
          
    GoogleFit.getDailyStepCountSamples(options, (err, res) => {
      if (err)
      {
      console.log('getDailyStepCountSamples: ',err)
      return
      }
      console.log('getDailyStepCountSamples: ',res)
      console.log('getDailyStepCountSamples: ',res[2].steps[0].value)
      setDailyStepsTotal(res[2].steps[0].value)
  })
})
    })
    .catch((err) => {
      console.log('android getDailyStepCountSamples error >>> ', err)
    });
};


const getStepsIOS = () => {
  let options = {
    permissions: {
        read: ["StepCount"],
        write: ["StepCount"]
    }
};

AppleHealthKit.initHealthKit(options, (err, results) => {
  if (err) {
      console.log("error initializing Healthkit: ", err);
      return;
  }

  let Day = parseInt ( new Date().getDate().toString() )
  let Month = parseInt (  new Date().getMonth().toString() )
  let Year = parseInt (  new Date().getFullYear().toString() )

  let options = {
    startDate: (new Date(Year,Month,Day)).toISOString() ,
    endDate:   (new Date()).toISOString() // optional; default now
};

 AppleHealthKit.getDailyStepCountSamples(options, async (err, results) => {
    if (err) {
      console.log(err)
        return;
    }
    var total = 0; 
    for(var i = 0 ; i < results.length ; i++)
    { 
       total = total + results[i].value
    }
    console.log("getDailyStepCountSamples ios",total)
    setDailyStepsTotal(total)
    let newTotal = parseInt( total );
    console.log("newTotal ios",newTotal)

    let oldTotal = await fetchSteps();
    console.log("oldTotal ios",oldTotal)

    console.log("difTotal ios", oldTotal - newTotal)

    postSteps( oldTotal - newTotal );
});
});
};



const fetchCompletedActivity = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.activityUrl}/activity/user/starpoint`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchCompletedActivity Error: ",response.status);
    } else {
      let result = await response.json();
      console.log("fetchCompletedActivity : ",result);
      setCompletedActivity(result)
      return result;
    }
  } catch (error) {
    console.log("fetchCompletedActivity error : ",error);
  }
}


const fetchAllActivities = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.activityUrl}/activity/types`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchAllActivities Error: ",response.status);
      
    } else {
      let result = await response.json();
      setAllActivities(result)
      console.log("fetchCompletedActivity : ",result);
      return result;
    }
  } catch (error) {
    console.log("fetchAllActivities error : ",error);
  }
}



// Fetch user name & id 
const fetchMe = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.MembershipUrl}/Membership/me/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchMe Error: ",response.status);
    } else {
      let result = await response.json();
      setName(result.displayName);
      setTeamID(result.teamId)
      setID(result.userId);
      console.log("fetchMe : ",result);
      return result;
    }
  } catch (error) {
    console.log("fetchMe error : ",error);
  }
}


// Fetch Steps of the day
const fetchSteps = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.stepUrl}/steps/latest/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchSteps Error: ",response.status);
    } else {
      let result = await response.json();
      console.log("fetchSteps : ",result.stepCount);
      return result.stepCount;
    }
  } catch (error) {
    console.log("fetchSteps error : ",error);
  }
}

// Fetch my photo
const fetchPhoto = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.MembershipUrl}/Membership/me/photo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchPhoto Error: ",response.status);
    } else {
      let result = await response.json();
      console.log('fetchPhoto ',result)
      setPhoto(result.photo);
      return result;
    }
  } catch (error) {
    console.log("fetchPhoto error : ",error);
  }
}

// Fetch my team info
const fetchMyTeam = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.MembershipUrl}/Membership/me/team`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchMyTeam Error: ",response.status);
    } else {
      let result = await response.json();
      console.log("fetchMyTeam : ",result);
      setMyTeam(result);
      return result;
    }
  } catch (error) {
    console.log("fetchMyTeam error : ",error);
  }
}

// Fetch my team members info
const fetchMyTeamMembers = async() => {
  try {
    const response = await fetch(`${fetchMeconfig.MembershipUrl}/Membership/me/members/full`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchMyTeamMembers Error: ",response.status);
    } else {
      let result = await response.json();
      console.log("fetchMyTeamMembers : ",result);
      setTeams(result);
      return result;
    }
  } catch (error) {
    console.log("fetchMyTeamMembers error : ",error);
  }
}


// Fetch my starpoints
const fetchStarPoints = async() => {

// Date
let Day = new Date().getDate().toString()
let Month = new Date().getMonth().toString()
let Year = new Date().getFullYear().toString()
let dateStartToday = Year+'-'+Month+'-'+Day+'T00:00:00.000Z'

  try {
    const response = await fetch(`${fetchMeconfig.starPointUrl}/StarPoint/Me/Total/${dateStartToday}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchStarPoints Error: ",response.status);
    } else {
      let result = await response.json();
      console.log('fetchStarPoints ',result);
      console.log('fetchStarPoints ',result.totalStarPoints);
      
      setStarPoints(result.totalStarPoints);
      return result;
    }
  } catch (error) {
    console.log("fetchStarPoints error : ",error);
  }
}


// Fetch all consests
const fetchCompetitions = async() => {

  try {
    const response = await fetch(`${fetchMeconfig.MembershipUrl}/Membership/me/team`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
    });
    if (!response.ok) {
      console.log("fetchCompetitions Error: ",response.status);
    } else {
      let result = await response.json();
      setCompetitions(result);
      console.log('fetchCompetitions : ',result)
      return result;
    }
  } catch (error) {
    console.log("fetchCompetitions error : ",error);
  }
}


// Fetch all challenges
const fetchChallenges = async() => {
  
    try {
      const response = await fetch(`${fetchMeconfig.challengeUrl}/challenges/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + azureToken,
        },
      });
      if (!response.ok) {
        console.log("fetchChallenges Error: ",response.status);
      } else {
        let result = await response.json();
        setChallenges(result);
        console.log('fetchChallenges : ',result)
        return result;
      }
    } catch (error) {
      console.log("fetchChallenges error : ",error);
    }
  }





const postSteps = async( stepCount ) => {

  let timeNow1 = moment().format().toString().substring(10,19)+'.111Z'
  let timeNow2 = moment().format().toString().substring(10,19)+'.222Z'
  let timeNow3 = moment().format().toString().substring(10,19)+'.333Z'
  let Day = new Date().getDate().toString()
  let Month = (new Date().getMonth() + 1).toString()
  let Year = new Date().getFullYear().toString()
  let dateStartToday1 = Year+'-'+Month+'-'+Day+timeNow1
  let dateStartToday2 = Year+'-'+Month+'-'+Day+timeNow2
  let dateStartToday3 = Year+'-'+Month+'-'+Day+timeNow3


  try {
    const response = await fetch(`${fetchMeconfig.stepUrl}/steps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
      body: JSON.stringify({
        "endTime": dateStartToday2,
        "startTime": dateStartToday1,
        "stepCount": stepCount,
        "uploadedTime": dateStartToday3
      })
    })
    return await response.json(); 
  } catch (error) {
    console.log("error postSteps", error)
  }
};


return (
  <AuthContext.Provider value={{
    azureCode,setAzureCode,
    azureToken,setAzureToken,
    googleToken,setGoogleToken,
    name,setName,
    id,setID,
    teamID,setTeamID,
    photo,setPhoto,
    teamName,setTeamName,
    dailyStepsTotal,setDailyStepsTotal,
    weeklyStepsTotal,setWeeklyStepsTotal,
    monthlyStepsTotal,setMonthlyStepsTotal,
    weeklySteps,setWeeklySteps,
    monthlySteps,setMonthlySteps,
    starPoints,setStarPoints,
    competitions,setCompetitions,
    lastCompetition,setLastCompetition,
    myTeam,setMyTeam,
    teams,setTeams,
    modalVisible,setModalVisible,
    isEditActivity,setIsEditActivity,
    pickerActive, setPickerActive,
    pickerId,setPickerId,
    pickerContent,setPickerContent,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    pickerIntensity,setPickerIntensity,
    pickerDate,setPickerDate,
    isDatePicker,setIsDatePicker,
    completedActivity,setCompletedActivity,
    allActivities,setAllActivities,
    challenges,setChallenges,
    isLoading,setIsLoading
    }} >
  <NavigationContainer theme={ NavigationTheme } >
  { azureToken ? <HomeNavigator /> : <AuthNavigator /> }
  </NavigationContainer>
  </AuthContext.Provider>
  );    
  };

const codePushOpthions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
};

export default codePush(codePushOpthions) (App);