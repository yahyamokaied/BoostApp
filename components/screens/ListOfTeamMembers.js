import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight,SafeAreaView,FlatList } from 'react-native';

import Teams from './Teams';

import AuthContext from '../../auth/context';

const ListOfTeamMembers = () => {

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
        myTeam,setMyTeam,
        teams,setTeams
      } = useContext(AuthContext);

      const renderItem = ({ item }) => (
        <Teams
        memberPhoto={item.image.photo}
        memberName={item.displayName}
        teamName={myTeam.name}
        teamStarPoints={44}
        teamProgress={44}
        />
      );



return (
<View style={{flex: 1}}>

<SafeAreaView style={styles.container}>
      <FlatList
        data={teams}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

</View>
);
};


export default ListOfTeamMembers;


const styles = StyleSheet.create({
    OuterContainer: {
      flex: 1,
    },
    Test: {
      width: Platform.OS === 'ios' ? 70 : 60,
      height: Platform.OS === 'ios' ? 70 : 60,
      borderRadius: Platform.OS === 'ios' ? 70/2 : 60,
      backgroundColor: '#e8d8ac',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TeamCircleSmall: {
      width: Platform.OS === 'ios' ? 70 : 60,
      height: Platform.OS === 'ios' ? 70 : 60,
      borderRadius: Platform.OS === 'ios' ? 70/2 : 60,
      backgroundColor: 'white',
    },
  });
