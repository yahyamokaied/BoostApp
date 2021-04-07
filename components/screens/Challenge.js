import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppIcon from '../../Assets/Icons/icons';
import { Colors, Buttons, Container, AppStyle, AppText, AppColor } from '../styles';
import AuthContext from '../../auth/context';

const Challenge = ({challengeId, challengeTitle, challengeDescription, challengeImage, challengeStarpoint }) => {

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
        challenges,setChallenges
      } = useContext(AuthContext);

return (

<View style={styles.challenge}>
    <FastImage
            style={styles.blurebg}
            source={require('../../Assets/images/blure.png')} >
    </FastImage>
      <View style={styles.flag}>
      <AppText.Text4 color={AppColor.WhiteColor} >0</AppText.Text4>
      <AppIcon name='star' size={-12} color={AppColor.WhiteColor}/>
      </View>
      <View style={styles.flagtitle}>
      <AppText.Text3 color={AppColor.WhiteColor} >{ challenges ? challengeTitle : 'No Challenge'}</AppText.Text3>
      <AppText.Text6 color={AppColor.WhiteColor} >{ challenges ? challengeDescription : 'No Description'}</AppText.Text6>
      </View>
      <TouchableOpacity style={styles.flagbutton}>
      <AppText.Text5 color={AppColor.WhiteColor} > STOP  </AppText.Text5>
      <AppIcon name='pause-circle' size={-14} color={AppColor.WhiteColor}/>
      </TouchableOpacity>
</View>

);
};


export default Challenge;

const styles = StyleSheet.create({
  blurebg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: AppColor.BlackColor
  },
  challenge: {
    width: AppStyle.ww / 1.6,
    height: AppStyle.hh / 3.15,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: (AppStyle.ww + AppStyle.hh) * 0.01,
    overflow:'hidden',
    marginTop: AppStyle.hh * 0.015,
  },
icon: {
  position:'absolute',
  right: - AppStyle.ww * 0.05
},
flag: {
  width: '28%',
  height: '15%',
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
  height: '22%',
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  bottom: AppStyle.hh * 0.048,
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
  backgroundColor: AppColor.ButtonBG,
},
});
