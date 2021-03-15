import React, {useContext} from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Screen, Colors, Buttons, AppText, AppStyle, AppColor } from '../components/styles';
import ProfileImage from '../components/screens/ProfileImage';
import FastImage from 'react-native-fast-image';
import AuthContext from '../auth/context';
import AppIcon from '../Assets/Icons/icons';


import TeamHUD from '../components/screens/TeamHUD';
import TeaminfoBar from '../components/screens/TeaminfoBar';
import ListOfTeamMembers from '../components/screens/ListOfTeamMembers';

const TeamsScreen = ({ navigation }) => {

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
    pickerActive, setPickerActive,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    completedActivity,setCompletedActivity,
    allActivities,setAllActivities
  } = useContext(AuthContext);

return (

<Screen style={styles.screen}>

{/* Header 1 */}
<View style={styles.header1}>
      <FastImage
          style={styles.blurebg}
          source={require('../Assets/images/blure.png')} >
      </FastImage>
{/*       <View style={styles.header1overlay} /> */}
{/* Header 1 content */}

<View style={styles.content1}>
  <FastImage
        style={styles.img}
        source={ require('../Assets/images/team.png') }
  />
{/*     <FastImage
        style={styles.img}
        source={ photo ? { uri:photo } : require('../Assets/images/team.png') }
  /> */}
<AppText.Text5> Team Name </AppText.Text5>
</View>

  </View>

{/* Header 2 */}
<View style={styles.header2}>
        <FastImage
        style={styles.blurebg}
        source={require('../Assets/images/blure.png')} >
        </FastImage>
    <View style={styles.header2overlay} />

        
{/* Header 2 content */}

<View style={styles.content2}>
<AppText.Text5 color={AppColor.WhiteColor} > StarPoints </AppText.Text5>

<View style={styles.starpoint}>
<AppText.Text3 color={AppColor.WhiteColor} >0</AppText.Text3>
<View style={styles.icon}>
<AppIcon name='star' size={-8} color={AppColor.WhiteColor}/>
</View>
</View>
</View>


</View>

{/* Body */}
  <View style={styles.body}>
{/* Body content */}

<View style={styles.content3}>
<FastImage
        style={styles.img}
        source={ photo ? { uri:photo } : require('../Assets/images/team.png') }
/>
<AppText.Text5 color={AppColor.BlackColor}>{name ? name : 'Team Member Name'} </AppText.Text5>
<View style={styles.starpoint2}>
<AppText.Text3 color={AppColor.Secondary2} >{ starPoints ? starPoints : '0'}</AppText.Text3>
<View style={styles.icon}>
<AppIcon name='star' size={-10} color={AppColor.Secondary2}/>
</View>
</View>


</View>


</View>

<ProfileImage />

</Screen>

/* <Screen>
<TeamHUD />
<TeaminfoBar />
<ListOfTeamMembers />
<ProfileImage />
</Screen> */


);
};

export default TeamsScreen;

const styles = StyleSheet.create({
  screen: {
    height: AppStyle.hh,
    width: AppStyle.ww
  },
  header1: {
    height: AppStyle.hh * 0.23 ,
  },
  blurebg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: AppColor.BGColor
  },
  header1overlay: {
    width: '100%',
    height: '100%',
    position:'absolute',
    backgroundColor: AppColor.BlackColor,
    opacity:0.7
  },
  header2: {
    height: AppStyle.hh * 0.10,
  },
  header2overlay: {
    width: '100%',
    height: '100%',
    position:'absolute',
    backgroundColor: AppColor.Secondary2,
    opacity: 0.7
  },
  content1:{
    position:'absolute',
    top: AppStyle.hh / 15,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:AppStyle.hh * 0.015
    },
  content2:{
    flexDirection:'column',
    alignSelf:'center',
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:AppStyle.hh * 0.007
    },
    content3:{
      width:'100%',
      flexDirection:'row',
      alignSelf:'center',
      position:'absolute',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:AppStyle.ww * 0.05,
      paddingVertical:AppStyle.hh * 0.002,
      },
  icon: {
    position:'absolute',
    right: - AppStyle.ww * 0.05
  },
  flag: {
    width: '40%',
    height: '16%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:AppStyle.ww / 40,
    borderBottomLeftRadius:AppStyle.ww / 40,
    position:'absolute',
    top:AppStyle.hh / 40,
    right:0,
    backgroundColor: AppColor.BlackColor,
    opacity:0.6
  },
  flagtitle: {
    width: '100%',
    height: '14%',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom: AppStyle.hh * 0.036,
    backgroundColor: AppColor.BlackColor,
    opacity:0.6
  },
  flagbutton: {
    flexDirection:'row',
    width: '100%',
    height: '15%',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    backgroundColor: AppColor.Secondary2,
  },
  body: {
    flex:1,
    alignItems:'center',
    paddingVertical:AppStyle.hh * 0.015
  },
  img: {
    width: (AppStyle.hh + AppStyle.ww) * 0.05  ,
    height: (AppStyle.hh + AppStyle.ww) * 0.05  ,
    borderRadius: (AppStyle.hh + AppStyle.ww) * 0.025,
    borderColor:AppColor.Primary2,
    borderWidth: 1,
    marginVertical:AppStyle.hh * 0.01
  },
  starpoint: {
    width: AppStyle.ww * 0.25,
    height: AppStyle.hh * 0.042,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: AppColor.WhiteColor,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    marginTop: AppStyle.hh * 0.005,
    marginBottom: AppStyle.hh * 0.01
  },
  starpoint2: {
    width: AppStyle.ww * 0.2,
    height: AppStyle.hh * 0.042,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: AppColor.Secondary2,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
  },
  icon: {
    position:'absolute',
    right: - AppStyle.ww * 0.03
  },
});
