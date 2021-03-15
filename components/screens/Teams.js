import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppIcon from '../../Assets/Icons/icons';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import AuthContext from '../../auth/context';

const Teams = ({ memberPhoto, memberName, teamName, teamStarPoints, teamProgress }) => {
    const {
        azureToken,setAzureToken,
        googleToken,setGoogleToken,
        name,setName,
        id,setID,
        mail,setMail,
        photo,setPhoto,
        dailyStepsTotal,setDailyStepsTotal,
        weeklyStepsTotal,setWeeklyStepsTotal,
        monthlyStepsTotal,setMonthlyStepsTotal,
        weeklySteps,setWeeklySteps,
        monthlySteps,setMonthlySteps,
        starPoints,setStarPoints,
        competition,setCompetition,
        myTeam,setMyTeam,
        teams,setTeams
      } = useContext(AuthContext);

return (
<View style={{padding: 15, flexDirection: 'row', alignItems: 'center' }}>
<View style={{flexDirection: 'row', justifyContent:'space-between'}}>
<Image style={styles.Teamphoto}
source={teams ? {uri: memberPhoto } : require('../../Assets/Img/nophoto.png')}
/>
<View style={{flex: 0.6 , paddingLeft:7}}>
<Text style={{color: '#01354D', fontStyle: 'italic',fontSize: 18, paddingVertical:3}}>
    {teams ? memberName : 'No Team'}</Text>
<View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:3}}>
<AppIcon name='star' size={-22} color='#01354D' />
<Text style={{color: '#01354D', fontSize: 13, alignSelf: 'center' }}> { teams ? 44 : 44 } </Text>
</View>
<Text style={{color: '#01354D'}}>{teams ? teamName : 'No Team'}</Text>
</View>

<View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
<View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0}}>
<Text style={{color: '#2FE591'}}> { teams ? teamStarPoints : 44 } % </Text>
</View>
<AnimatedProgressWheel
size={65}
width={6}
color={'#2FE591'}
progress={teams ? teamProgress : 44}
backgroundColor={'#353B57'}
/>
</View>
</View>
</View>
)
}

export default Teams;

const styles = StyleSheet.create({
  TeamCircleBig: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 70,
    backgroundColor: '#01354D',
    alignSelf: 'center'
  },
  Teamphoto: {
    width: 50,
    height: 50,
    resizeMode:'cover',
    borderRadius: Platform.OS === 'ios' ? 50/2 : 50,
    backgroundColor: '#01354D',
    alignSelf: 'center',
    marginLeft:30
  }
});
