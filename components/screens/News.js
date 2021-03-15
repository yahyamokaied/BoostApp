import React, {useEffect, useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Screen, Colors, Buttons, Container, TextStyle } from '../styles';

import AuthContext from '../../auth/context';

import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

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


      const DATA = [
        {
        id: '../../Assets/Img/basketball.jpg',
        title: 'First Item',
        },
        {
        id: '../../Assets/Img/OutdoorsandSports_4722c392-3664-4751-9d86-1f109c075a04.jpg',
        title: 'Second Item',
        },
        {
        id: '../../Assets/Img/runner.jpg',
        title: 'Third Item',
        },
        ];



const renderItem = ({item, index}) => {
    return (
        <ImageBackground style={styles.slide}
        source={require('../../Assets/Img/basketball.jpg')}
        >
        <View style={styles.starview}>
        <Icon name="ios-star-outline" style={styles.star}/>
        <Text style={styles.starnumber}>44</Text>
        </View>
        <View style={styles.titleview}>
        <Text style={styles.titletext}>35 Teams completed the bike challenge</Text>
        </View>

        </ImageBackground>
    );
}


return (
    <Carousel
    ref={(c) => { this._carousel = c; }}
    data={DATA}
    renderItem={renderItem}
    sliderWidth={windowWidth}
    itemWidth={windowWidth / 1.4}
  />
);
};


export default ProfileImage;

const styles = StyleSheet.create({
    slide: {
        height:300,
        width:'100%',
        resizeMode:'stretch',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    starview: {
        opacity:0.4,
        backgroundColor:'black',
        width:70,
        height:40,
        position:'absolute',
        right:0,
        top:15,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20
    },
    star: {
    color:'white',
    fontSize:26,
    position:'absolute',
    right:5,
    top:6,
    },
    starnumber: {
        color:'white',
        fontSize:22,
        position:'absolute',
        right:31,
        top:7.5,
        },
    titleview: {
        backgroundColor:'white',
        width:'100%',
        height:50,
        position:'absolute',
        bottom:0.3,
        },
    titletext: {
        color:'black',
        fontSize:14,
        margin:8,
        alignSelf:'center'
        },
    profileImageContainer: {
      ...Container.profileImageContainer,
    }
  });
