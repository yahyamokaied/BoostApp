import React, {useEffect, useState, useContext} from 'react';
import { View, Modal, StyleSheet, Text, ImageBackground, Alert } from 'react-native';
import moment from 'moment';
import { Colors, Buttons, Container, AppColor, AppText, AppStyle } from '../styles';
import AppIcon from '../../Assets/Icons/icons';

import AuthContext from '../../auth/context';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppPicker from './AppPicker';

import { editCompletedActivity, postCompletedActivity } from '../functions/APIFunctions';


export default AddActivity = () => {

const {
    azureToken,setAzureToken,
    googleToken,setGoogleToken,
    name,setName,
    id,setID,
    mail,setMail,
    photo,setPhoto,
    teamName,setTeamName,
    dailyStepsTotal,setDailyStepsTotal,
    weeklyStepsTotal,setWeeklyStepsTotal,
    monthlyStepsTotal,setMonthlyStepsTotal,
    weeklySteps,setWeeklySteps,
    monthlySteps,setMonthlySteps,
    starPoints,setStarPoints,
    competition,setCompetition,
    modalVisible,setModalVisible,
    isEditActivity,setIsEditActivity,
    pickerActive, setPickerActive,
    pickerContent,setPickerContent,
    pickerId,setPickerId,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    pickerIntensity,setPickerIntensity,
    pickerDate,setPickerDate,
    isDatePicker,setIsDatePicker,
    myTeam,setMyTeam,
    completedActivity,setCompletedActivity,
    allActivities,setAllActivities
  } = useContext(AuthContext);

const Duration = ["30","60","90","120","150","180"]
const Intensity = ["low","medium","high"]


useEffect(() => {
  fetchCompletedActivity();
},[completedActivity]);



const fetchMeconfig = {
  MembershipUrl: 'https://boostapp-membership-api-test.azurewebsites.net',
  competitionUrl: 'https://boostappcompetitionapi.azurewebsites.net',
  stepUrl: 'https://boostappstepapi.azurewebsites.net',
  starPointUrl: 'https://starpoint.azurewebsites.net',
  activityUrl: 'https://boostappactivityapi.azurewebsites.net'
}

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
    console.log("fetch error : ",error);
  }
}



const addActivity = () => {
  if( pickerType == 'Press to select' || pickerType == null )
{
  Alert.alert('Activity is required')
  return null;
}
if( pickerDuration == 'Press to select' || pickerDuration == null )
{
  Alert.alert('Duration time is required')
  return null;
}
let timeNow = moment().format().toString().substring(0,19)+'.000Z';

//let timeNow = pickerDate.toString().substring(0,24)+'.000Z';
let durationNum = parseInt(pickerDuration)
console.log(typeof durationNum)
console.log(pickerType, pickerDuration,pickerIntensity, timeNow)
try {
const res = postCompletedActivity(pickerType,durationNum,pickerIntensity,timeNow,azureToken);
if(res.status == 200)
{
console.log('addActivity ',res)
Alert.alert('Activity Added successfully');
fetchCompletedActivity();
setPickerType('Press to select');
setPickerDuration('Press to select');
setPickerIntensity('Press to select');
}
else console.log('addActivity error1')
}
catch (error) {
  console.log('addActivity error',error)
 }  
}

const editActivity = async () => {
  if( pickerType == 'Press to select' || pickerType == null )
{
  Alert.alert('Activity is required')
  return null;
}
if( pickerDuration == 'Press to select' || pickerDuration == null )
{
  Alert.alert('Duration time is required')
  return null;
}
let timeNow = moment().format().toString().substring(0,19)+'.000Z';
let durationNum = parseInt(pickerDuration)
console.log(typeof durationNum)
console.log(pickerType, pickerDuration,pickerIntensity, timeNow)

const res = await editCompletedActivity(pickerId,pickerType,durationNum,pickerIntensity,timeNow,azureToken);
if(res.status == 200)
Alert.alert('Activity edited successfully');
fetchCompletedActivity();
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


<Modal
animationType={'slide'}
transparent={true}
visible={modalVisible}
>

<View style={styles.modal}>
<View style={styles.container}>

<View>
<AppText.Text3 color={AppColor.Title} >{isEditActivity ? 'Edit Activity' : 'Add Activity'}</AppText.Text3>

<View  style={styles.title} >
<AppIcon name='walk' color={AppColor.TextLight} size={-14} />
<AppText.Text6 color={AppColor.TextLight} > Select Activity</AppText.Text6>
</View>


<TouchableOpacity
  onPress = { () => { setIsDatePicker(false), setPickerContent(allActivities || 'no activity'), setPickerActive(true) }}
  style={styles.button}
>
<AppText.Text5 color={AppColor.TextDark} >{pickerType ? pickerType : 'Press to select' }   </AppText.Text5>
<AppIcon name={checkIcon(pickerType)} color={AppColor.TextDark} size={-4} />
</TouchableOpacity>

<View  style={styles.title} >
<AppIcon name='timer' color={AppColor.TextLight} size={-14} />
<AppText.Text6 color={AppColor.TextLight} > Duration of Training (min)</AppText.Text6>
</View>

<TouchableOpacity
  onPress = { () => { setIsDatePicker(false), setPickerContent(Duration), setPickerActive(true) }}
  style={styles.button}
>
<AppText.Text5 color={AppColor.TextDark} >{pickerDuration ? pickerDuration : 'Press to select' }   </AppText.Text5>
<AppIcon name='arrow-down' color={AppColor.TextDark} size={-4} />
</TouchableOpacity>

<View  style={styles.title} >
<AppIcon name='pulse' color={AppColor.TextLight} size={-14} />
<AppText.Text6 color={AppColor.TextLight} > Intensity</AppText.Text6>
</View>

<TouchableOpacity
  onPress = { () => { setIsDatePicker(false), setPickerContent(Intensity), setPickerActive(true) }}
  style={styles.button}
>
<AppText.Text5 color={AppColor.TextDark} >{pickerIntensity ? pickerIntensity : 'Press to select' }   </AppText.Text5>
<AppIcon name='arrow-down' color={AppColor.TextDark} size={-4} />
</TouchableOpacity>

<View  style={styles.title} >
<AppIcon name='clock' color={AppColor.TextLight} size={-14} />
<AppText.Text6 color={AppColor.TextLight} > Date and Time</AppText.Text6>
</View>

<TouchableOpacity
  onPress = { () => { setIsDatePicker(true), setPickerActive(true) }}
  style={styles.button}
>
<AppText.Text5 color={AppColor.Primary3} >{pickerDate ? pickerDate.toString().substring(0,24) : 'Press to select' }   </AppText.Text5>
<AppIcon name='arrow-down' color={AppColor.Primary3} size={-4} />
</TouchableOpacity>


<View  style={styles.buttons} >

<TouchableOpacity
  onPress = { () => setModalVisible(false) }
  style={styles.closebutton}
>
<AppText.Text6 color={AppColor.WhiteColor} >X</AppText.Text6>
</TouchableOpacity>

<TouchableOpacity
  onPress = { () => {setPickerType('Press to select'),setPickerDuration('Press to select'),setPickerIntensity('Press to select'),setPickerDate('Press to select')} }
  style={styles.clearbutton}
>
<AppText.Text6 color={AppColor.WhiteColor} >Clear -</AppText.Text6>
</TouchableOpacity>

<TouchableOpacity
  onPress = { () => { isEditActivity ?
    

    Alert.alert(
      "Are you Sure",
      "(edit this activity)",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Edit", onPress: () => editActivity() }
      ]
    )
     :
     Alert.alert(
      "Are you Sure",
      "(add this activity)",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Add", onPress: () =>
        {addActivity(),setPickerType('Press to select'),setPickerDuration('Press to select'),setPickerIntensity('Press to select'),setPickerDate('Press to select')}
      }
      ]
    )
     
  
  } }
  style={styles.addbutton}
>
<AppText.Text6 color={AppColor.WhiteColor} >{isEditActivity ? 'Edit Activity' : 'Add Activity'} +</AppText.Text6>
</TouchableOpacity>

</View>


<AppPicker  content={allActivities || 'no Activites'} />

</View>
</View>

</View>
</Modal>

)

}


const styles = StyleSheet.create({
  modal : {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100, 0)',
    padding: AppStyle.ww * 0.03,
  },
  container: {
    width:'100%',
    height:'85%',
    borderTopLeftRadius: (AppStyle.ww + AppStyle.hh ) * 0.04,
    borderTopRightRadius: (AppStyle.ww + AppStyle.hh ) * 0.04,
    backgroundColor:'white',
    opacity:0.99,
    position:'absolute',
    bottom: - (AppStyle.hh * 0.025),
    flexDirection:'column',
    alignItems:'center',
    alignSelf:'center',
    shadowColor: AppColor.BlackColor,
    paddingVertical: AppStyle.hh * 0.02,
    marginVertical: AppStyle.hh * 0.02,
    shadowOffset:
    { width: 0,height: 11,},
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  title : {
    flexDirection:'row',
    alignItems:'center',
    paddingTop: AppStyle.hh * 0.005,
    paddingBottom: AppStyle.hh * 0.005,
    marginTop: AppStyle.hh * 0.01,

  },
  button: {
    width: AppStyle.ww * 0.75,
    height: AppStyle.hh * 0.055,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderColor: AppColor.InputBorder,
    backgroundColor: AppColor.InputBG,
    borderWidth:0.3,
    marginTop: AppStyle.hh * 0.004,
    marginBottom: AppStyle.hh * 0.009,
    padding: (AppStyle.ww + AppStyle.hh) * 0.002,
    borderRadius: (AppStyle.ww + AppStyle.hh) * 0.008,
  },
  buttons : {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: AppStyle.hh * 0.04,

  },
  addbutton: {
    width: AppStyle.ww * 0.28,
    height: AppStyle.hh * 0.04,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: AppColor.ButtonBG,
    padding: (AppStyle.ww + AppStyle.hh) * 0.002,
    borderRadius: (AppStyle.ww + AppStyle.hh) * 0.008,
  },
  clearbutton: {
    width: AppStyle.ww * 0.2,
    height: AppStyle.hh * 0.04,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: AppColor.LightGray,
    padding: (AppStyle.ww + AppStyle.hh) * 0.002,
    borderRadius: (AppStyle.ww + AppStyle.hh) * 0.008,
  },
  closebutton: {
    width: AppStyle.ww * 0.09,
    height: AppStyle.hh * 0.04,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: AppColor.BlackColor,
    padding: (AppStyle.ww + AppStyle.hh) * 0.002,
    borderRadius: (AppStyle.ww + AppStyle.hh) * 0.008,
  }
});

