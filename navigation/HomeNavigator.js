import React from 'react';
import { StyleSheet,View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ChalengesScreen from '../screens/ChalengesScreen';
import TeamsScreen from '../screens/TeamsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyActivityScreen from '../screens/MyActivityScreen';
import { AppColor, AppStyle } from '../components/styles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = () => (
    <Tab.Navigator mode="modal" screenOptions={{headerShown: false}} initialRouteName="HomeScreen"
    tabBarOptions={
      {
        activeTintColor: AppColor.Secondary2,
        inactiveTintColor: AppColor.WhiteColor,
        activeBackgroundColor: '#2b2b2a',
        inactiveBackgroundColor: '#2b2b2a',
        labelStyle: {
          paddingBottom: AppStyle.hh / 200,
        },
        style: {
          borderTopColor: '#ffffff',
          backgroundColor: 'transparent'
        }
/*         style: {
          height: AppStyle.hh * 0.07
        } */
      }}

    >

<Tab.Screen name="Home" component={HomeScreen}
      options={{ tabBarIcon: ({color,size}) =>
      <Icon name="ios-home" color={color} size={size}/>
              }}/>

<Tab.Screen name="Chalenges" component={ChalengesScreen}
      options={{ tabBarIcon: ({color,size}) =>
      <Icon name="ios-star" color={color} size={size}/>
              }}/>

<Tab.Screen name="Teams" component={TeamsScreen}
      options={{ tabBarIcon: ({color,size}) =>
      <Icon name="ios-people" color={color} size={size}/>
              }}/>

<Tab.Screen name="Notifications" component={NotificationsScreen}
      options={{ tabBarIcon: ({color,size}) =>
      <View>
      <View style={styles.not}/>
      <Icon name="ios-notifications" color={color} size={size}/>
      </View>

              }}/>

<Tab.Screen name="My Activity" component={MyActivityScreen}
      options={{ tabBarIcon: ({color,size}) =>
      <Icon name="ios-person" color={color} size={size}/>
              }}/>
              

  </Tab.Navigator>
);

export default HomeNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
    <Stack.Screen name="AppNavigator" component={AppNavigator} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  not: {
    width:11,
    height:11,
    borderRadius:10,
    backgroundColor:AppColor.Secondary2,
    position:'absolute',
    right:-7,
    top:2
  },
  blure: {
    width:'100%',
    height:'100%',
    backgroundColor:'red'
  }
})