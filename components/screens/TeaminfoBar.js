import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppIcon from '../../Assets/Icons/icons';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import AuthContext from '../../auth/context';

const TeaminfoBar = () => {
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
<View style={{padding: 15, backgroundColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
<View style={{flexDirection: 'row'}}>
<Image style={styles.Teamphoto}
/* source={myTeam ? { uri: myTeam.image.data } : require('../../Assets/Img/nophoto.png')} */
source={ require('../../Assets/Img/nophoto.png')}
/>
<View style={{flex: 0.6 , paddingLeft:7}}>
<Text style={{color: 'white', fontStyle: 'italic', paddingVertical:3}}>Team</Text>
<Text style={{color: 'white'}}>{myTeam ? myTeam.name : 'No Team'}</Text>
<View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:3}}>
<AppIcon name='star' size={-18} color='white' />
<Text style={{color: 'white', fontSize: 15, alignSelf: 'center' }}> { myTeam ? 44 : 44 } </Text>
</View>
</View>
<View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
<View style={{position: 'absolute', justifyContent: 'center',alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0}}>
<Text style={{color: '#2FE591'}}> { myTeam ? 44 : 44 } % </Text>
</View>
<AnimatedProgressWheel
size={65}
width={6}
color={'#2FE591'}
progress={myTeam ? 44 : 44}
backgroundColor={'#353B57'}
/>
</View>
<View style={{flex: 0.4, justifyContent: 'center', alignItems: 'flex-end'}}>
<TouchableHighlight
style={{ padding: 10, borderWidth: 2 }}
onPress={() => console.log('woop')}>
<AppIcon name='arrow-forward' size={0} color='white' />
</TouchableHighlight>
</View>
</View>
</View>
)
}

export default TeaminfoBar;

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
    width: Platform.OS === 'ios' ? 50 : 50,
    height: Platform.OS === 'ios' ? 50 : 50,
    borderRadius: Platform.OS === 'ios' ? 50/2 : 50,
    backgroundColor: '#01354D',
    alignSelf: 'center',
    paddingRight:20
  }
});
