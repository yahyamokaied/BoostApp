import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Screen, Colors, Buttons, Container, AppColor, AppStyle } from '../styles';

import AuthContext from '../../auth/context';

const ProfileImage = () => {

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
    <View style={styles.container}>
      <FastImage
      style={styles.img}
      source={ photo ? { uri:photo } : require('../../Assets/images/profile.png') }
     />
    </View>
);
};


export default ProfileImage;

const styles = StyleSheet.create({
    container: {
      position:'absolute',
        top:0,
        right:0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: AppStyle.ww * 0.3,
        borderLeftWidth: AppStyle.ww * 0.3,
        transform:[{ rotate: "-90deg" }],
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: AppColor.BlackColor,
        opacity:0.8,
        borderLeftColor: 'transparent',
    },
    img: {
      width: (AppStyle.hh + AppStyle.ww) * 0.05  ,
      height: (AppStyle.hh + AppStyle.ww) * 0.05  ,
      position: 'absolute',
      borderRadius: (AppStyle.hh + AppStyle.ww) * 0.025,
      right: AppStyle.ww * 0.09,
      top: AppStyle.hh * 0.055,
      transform:[{ rotate: "90deg" }],
      borderColor:AppColor.Primary2,
      borderWidth: 1
    },
  });
