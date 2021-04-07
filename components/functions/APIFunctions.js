import {Alert} from 'react-native';
import * as AuthSession from 'expo-auth-session';

export const fetchMeconfig = {
  MembershipUrl: 'https://boostapp-membership-api-test.azurewebsites.net',
  competitionUrl: 'https://boostappcompetitionapi.azurewebsites.net',
  challengeUrl: 'https://boostapp-challenge-api.azurewebsites.net',
  stepUrl: 'https://boostappstepapi.azurewebsites.net',
  starPointUrl: 'https://starpoint.azurewebsites.net',
  activityUrl: 'https://boostappactivityapi.azurewebsites.net'
}

export const azureAdAppProps = {
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

// Check if the sigma token expired or not
export const checkIfTokenExpired = ({ exp }) => {
  console.log('token exp: ',exp)
  let time = +exp + '000';
  return new Date(parseInt(time)) < new Date();
};



// fetch sigma token fromn microsoft api
export const getToken = async (code, props) => {
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



export const postCompletedActivity = async( type, duration, intensity, time, azureToken ) => {

  try {
    const response = await fetch(`${fetchMeconfig.activityUrl}/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
      body: JSON.stringify({
        "activityType": type,
        "duration": duration,
        "intensity": intensity,
        "startTime": time
      })
    })
    console.log("postCompletedActivity ", response)
    Alert.alert('Activity added successfully');
    return await response.json(); 
  } catch (error) {
    console.log("postCompletedActivity error", error)
  }
}


export const editCompletedActivity = async( id, type, duration, intensity, time, azureToken ) => {

  try {
    const response = await fetch(`${fetchMeconfig.activityUrl}/activity/user/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + azureToken,
      },
      body: JSON.stringify({
        "activityType": type,
        "duration": duration,
        "intensity": intensity,
        "startTime": time
      })
    })
    console.log("postCompletedActivity ", response)
    Alert.alert('Activity edited successfully');
    return await response.json(); 
  } catch (error) {
    console.log("postCompletedActivity error", error)
  }
}


// Post multi steps 
/* const postMultiSteps = async() => {

try {
const response = await fetch(`${fetchMeconfig.stepUrl}/steps/multiple`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + Token,
  },
  body: JSON.stringify([{
    "endTime": "2020-10-13T09:39:46.252Z",
    "startTime": "2020-10-13T09:39:43.252Z",
    "stepCount": 666,
    "uploadedTime": "2020-10-13T09:39:47.252Z"
  }])
})
return await response.json(); 
} catch (error) {
console.log("error post", error)
}
} */

// Post last steps of the day
/* const postSteps = async() => {

  try {
    const response = await fetch(`${fetchMeconfig.stepUrl}/steps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Token,
      },
      body: JSON.stringify({
        "endTime": "2020-10-16T10:03:55.652Z",
        "startTime": "2020-10-16T10:03:55.652Z",
        "stepCount": 99,
        "uploadedTime": "2020-10-16T10:03:55.652Z"
      })
    })
    return await response.json(); 
  } catch (error) {
    console.log("error post", error)
  }
  } */