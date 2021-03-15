import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

import AuthContext from '../../auth/context';

const TeamHUD = () => {
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
        myTeam,setMyTeam
      } = useContext(AuthContext);

return (
<View style={{height: 200, backgroundColor: '#01354D'}}>
<View style={{position: 'absolute', justifyContent: 'center', alignSelf: 'center', top: 50}}>
<Image style={styles.TeamCircleBig} source={myTeam ? {uri: myTeam.image.data } : require('../../Assets/Img/nophoto.png')}/>
<Text style={{alignSelf: 'center',color: 'white', fontSize: 18}}> {myTeam ? myTeam.name : 'no team'} </Text>
</View>
</View>
)
}



export default TeamHUD;



const styles = StyleSheet.create({
  TeamCircleBig: {
    margin: 5,
    width: Platform.OS === 'ios' ? 100 : 70,
    height: Platform.OS === 'ios' ? 100 : 70,
    borderRadius: Platform.OS === 'ios' ? 100/2 : 70,
    backgroundColor:'white',
    alignSelf: 'center'
  },
});
