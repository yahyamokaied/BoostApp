import {Alert} from 'react-native';

export const fetchMeconfig = {
  MembershipUrl: 'https://boostapp-membership-api-test.azurewebsites.net',
  competitionUrl: 'https://boostappcompetitionapi.azurewebsites.net',
  challengeUrl: 'https://boostapp-challenge-api.azurewebsites.net',
  stepUrl: 'https://boostappstepapi.azurewebsites.net',
  starPointUrl: 'https://starpoint.azurewebsites.net',
  activityUrl: 'https://boostappactivityapi.azurewebsites.net'
}

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