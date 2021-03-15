import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

import AuthContext from '../../auth/context';

const UserHUD = () => {
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
        myTeam,setMyTeam
      } = useContext(AuthContext);

return (
<View style={{flexDirection:'column',borderBottomWidth:0.2, borderColor:'black', marginVertical: 4}}>
<Text style={{color: 'black', fontSize: 12, marginLeft:76, padding:4, }} >
    Date:
</Text>
<View style={{flexDirection:'row', paddingVertical: 6}}>
<Image style={styles.TeamCircleBig} source={ photo ? {uri: photo } : require('../../Assets/Img/nophoto.png')}/>
<Text style={{color: '#01354D', fontSize: 15 ,paddingLeft:60, marginHorizontal:20, alignSelf:'center', justifyContent:'center'}} >
    {name ? 'no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name no name'
    : 'no name'} </Text>
</View>
</View>
)
}



export default UserHUD;



const styles = StyleSheet.create({
  TeamCircleBig: {
    margin: 5,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor:'white',
    alignSelf: 'center',
    position:'absolute',
    left:10
  },
});
