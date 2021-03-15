
import React, {useEffect, useState, useContext} from 'react';
import { View, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppIcon from '../../Assets/Icons/icons';
import { Screen, Colors, AppText, AppStyle, AppColor } from '../styles';

import {fetchMeconfig} from '../functions/APIFunctions'

import AuthContext from '../../auth/context';

const ActivityHUD = ({ actId,activityName, activityDuration, activityIntensity, activityDate, activityStarpoint, activityDelete }) => {
    const {
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
        competition,setCompetition,
        myTeam,setMyTeam,
        completedActivity,setCompletedActivity,
        allActivities,setAllActivities,
        pickerId,setPickerId,
        pickerType,setPickerType,
        pickerDuration,setPickerDuration,
        pickerIntensity,setPickerIntensity,
        modalVisible, setModalVisible,
        isEditActivity,setIsEditActivity
      } = useContext(AuthContext);

    
      const removeActivity = async(id) => {
        const response = await fetch(`${fetchMeconfig.activityUrl}/activity/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + azureToken,
          },
        })
        console.log('removeActivity', id);
        console.log('removeActivity', response);
        Alert.alert('Activity removed successfully');

        return await response.json();
      }

const deleteActivity = (id) => {
  removeActivity(id)
}

const checkIcon = (name) => {
  switch(name) {
      case 'Aerobics':
      return 'yoga'
      break;

      case 'Badminton':
      return 'badminton'
      break;

      case 'Basketball':
      return 'basketball'
      break;

      case 'Bicycling':
      return 'bike'
      break;

      case 'Bowling':
      return 'bowling'
      break;

      case 'Dance':
      return 'human-female'
      break;

      case 'Football/soccer':
      return 'soccer'
      break;

      case 'Golf':
      return 'golf'
      break;

      case 'Gymnastics':
      return 'karate'
      break;

      case 'Handball':
      return 'handball'
      break;

      case 'Hockey':
      return 'hockey-sticks'
      break;

      case 'Ice Skate':
      return 'skate'
      break;

      case 'Martial arts':
      return 'karate'
      break;

      case 'Pilates':
        return 'yoga'
        break;

        case 'Ping pong':
          return 'table-tennis'
          break;


        case 'Rowing':
          return 'sail-boat'
          break;


        case 'Running':
          return 'run-fast'
          break;


        case 'Skateboard':
          return 'skateboard'
          break;


        case 'Spinning':
          return 'run'
          break;


        case 'Squash':
          return 'racquetball'
          break;
                        
          
        case 'Swimmimg':
        return 'swim'
        break;


        case 'Tennis':
        return 'tennis'
        break;


        case 'Volleyball':
        return 'volleyball'
        break;


        case 'Wrestling':
        return 'kabaddi'
        break;


        case 'Yoga':
        return 'meditation'
        break;

    default:
      return 'arrow-down'
  }
}


return (


<TouchableOpacity  style={styles.completed} onPress={() => {
  setModalVisible(true),
  console.log('activity edit'),
  setIsEditActivity(true),
  setPickerId(actId)
  setPickerDuration(activityDuration),
  setPickerType(activityName),
  setPickerIntensity(activityIntensity)
}  }
>
<AppIcon name={checkIcon(activityName)} size={-10} color={AppColor.BlackColor}/>
<AppText.Text6 color={AppColor.BlackColor} >{completedActivity ? activityName : 'No Activities'}</AppText.Text6>

<AppText.Text6 color={AppColor.BlackColor} >{completedActivity ? activityDuration : '0'} min</AppText.Text6>

<View  style={styles.starts}>
<AppText.Text6 color={AppColor.WhiteColor} >{activityStarpoint ? activityStarpoint : '0'}</AppText.Text6>
<AppIcon name='star' size={-16} color={AppColor.WhiteColor}/>
</View>
<AppText.Text6 color={AppColor.BlackColor} >{activityDate ? activityDate : 'No Date'}</AppText.Text6>

<TouchableOpacity onPress={() => deleteActivity(activityDelete)}>
<AppIcon name='delete' size={-2} color={AppColor.LightGray}/>
</TouchableOpacity>
</TouchableOpacity>

)
}

export default ActivityHUD;



const styles = StyleSheet.create({
  completed: {
    width:'95%',
    height:AppStyle.hh * 0.05,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignSelf:'center',
    borderColor:AppColor.LightGray,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    borderWidth:0.5,
    marginVertical:AppStyle.hh * 0.009
  },
  starts : {
    width:'18%',
    height:'80%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: AppColor.Secondary2,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.008,
  }
});
