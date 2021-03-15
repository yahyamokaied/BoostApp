import React, {useEffect, useState, useContext} from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Screen, Colors, Buttons, AppText, AppStyle, AppColor } from '../components/styles';
import FastImage from 'react-native-fast-image';
import AppIcon from '../Assets/Icons/icons';

import AuthContext from '../auth/context';

import ProfileImage from '../components/screens/ProfileImage';
import NotificationItem from '../components/screens/NotificationItem';

const NotificationsScreen = ({ navigation }) => {

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
        competition,setCompetition
      } = useContext(AuthContext);

return (

<Screen style={styles.screen}>

{/* Header 1 */}
<View style={styles.header1}>
      <FastImage
          style={styles.blurebg}
          source={require('../Assets/images/blure.png')} >
      </FastImage>
{/*       <View style={styles.header1overlay} />*/}
{/* Header 1 content */}

<View style={styles.content}>
<AppIcon name='bell' size={13} color={AppColor.WhiteColor}/>
<AppText.Text2> Notifications </AppText.Text2>
</View>

</View>

{/* Body */}
<View style={styles.body}>
{/* Body content */}

<View style={styles.content3}>
<AppIcon name='bell' size={-10} color={AppColor.Secondary2}/>
<View style={styles.message}>

<AppText.Text6 color={AppColor.BlackColor}> 5 Challenges added recently </AppText.Text6>
</View>
</View>


</View>

<ProfileImage />

</Screen>

/* <>
<View style={styles.header} >
<Icon name="ios-notifications" color={'white'} size={26} style={styles.icon}/>
<Text style={styles.headerText}>Notificatios</Text>
</View>
<ScrollView style={styles.container}>
<NotificationItem />
<NotificationItem />
<NotificationItem />
<NotificationItem />
</ScrollView>
</> */

);
};


export default NotificationsScreen;

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
    resizeMode: 'cover',
    backgroundColor: AppColor.BlackColor
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
  content:{
    position:'absolute',
    top: AppStyle.hh / 15,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    },
    content3:{
      width:'100%',
      flexDirection:'row',
      alignSelf:'center',
      position:'absolute',
      alignItems:'center',
      paddingHorizontal:AppStyle.ww * 0.05,
      paddingVertical:AppStyle.hh * 0.015,
      },
      message:{
        flex:1,
        alignItems:'center',
        borderColor:AppColor.Secondary2,
        borderWidth:0.4,
        paddingHorizontal:AppStyle.ww * 0.05,
        marginHorizontal:AppStyle.ww * 0.05,
        paddingVertical:AppStyle.hh * 0.02,
        borderRadius: (AppStyle.ww + AppStyle.hh)* 0.006,
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
  
