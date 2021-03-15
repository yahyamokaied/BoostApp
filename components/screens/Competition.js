import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppIcon from '../../Assets/Icons/icons';
import { Colors, Buttons, Container, TextStyle } from '../styles';

import AuthContext from '../../auth/context';

const Competition = () => {
  const navigation = useNavigation();

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
        lastCompetition,setLastCompetition

      } = useContext(AuthContext);



return (
<View style={styles.container}>
<ImageBackground
source={lastCompetition ? { uri:lastCompetition.image.data } : require('../../Assets/Img/nophoto.png')}

style={{resizeMode: 'cover',  width: "100%", height: 260 }}
>
</ImageBackground>

<View style={styles.competitionInfoContainer}>

<View style={{justifyContent: 'center'}}>
<Text style={styles.mediumBold}>{lastCompetition ? lastCompetition.name : 'no competition' }</Text>
<Text style={styles.smallOpacity}>{lastCompetition ? lastCompetition.description : 'no competition' }</Text>
<Text style={styles.smallOpacity}>From : {lastCompetition ? lastCompetition.startDate.substring(0,10) : 'no competition' } To : {lastCompetition ? lastCompetition.endDate.substring(0,10) : 'no competition' }</Text>
</View>

<TouchableHighlight style={styles.button}
 onPress={() => navigation.navigate("Chalenges") } 
>
<AppIcon name={'arrow-forward'} size={0} color={'white'} />
</TouchableHighlight>

</View>
</View>
);
};


export default Competition;

const styles = StyleSheet.create({
  competitionInfoContainer: {
    ...Container.competitionInfoContainer,
    ...Colors.blackBackground
  },
  mediumBold: {
    ...TextStyle.mediumBold,
    ...Colors.white
  },
  smallOpacity: {
    ...TextStyle.smallOpacity,
    ...Colors.white
  },
  button: {
    padding: 15,
    ...Container.center,
    ...TextStyle.opacity
  }
});
