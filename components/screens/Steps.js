import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AppIcon from '../../Assets/Icons/icons';
import { Colors, Buttons, Container, TextStyle } from '../styles';

import AuthContext from '../../auth/context';

const Steps = () => {

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
        starPoints,setStarPoints
      } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.stepStarContainer}>
          <View>
            <Text style={[styles.smallBold, styles.star]}>Star Points</Text>
            <Text style={[styles.star, styles.bigBold]}>
            {starPoints ? starPoints : 0}
            <AppIcon name={'star'} size={0} color={'#78C7C9'} />
            </Text>
          </View>
      </View>

      <View style={styles.stepStarContainer}>
          <View>
            <Text style={[styles.smallBold, styles.steps]}>Steps of the day</Text>
            <Text style={[styles.steps, styles.bigBold,{marginLeft:17}]}>
            {dailyStepsTotal ? dailyStepsTotal : 0 }
            <Image style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../../Assets/Img/walk.png')} />
            </Text>
          </View>
      </View>
    </View>
  )
};


export default Steps;

const styles = StyleSheet.create({
  container: {
    //...Container.center,
    margin: '5%',
  },
  smallBold: {
    ...TextStyle.smallBold,
  },
  steps: {
    ...Colors.stepColor
  },
  star: {
    ...Colors.starColor
  },
  bigBold: {
    ...TextStyle.largeBold
  },
  stepStarContainer: {
    ...Container.stepStarContainer,
    ...Colors.dirtyWhite
  }
});
