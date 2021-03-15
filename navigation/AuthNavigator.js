import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from '../screens/LogInScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = ({ navigation }) => (
    <AuthStack.Navigator mode="modal" screenOptions={{headerShown: false}} initialRouteName="LogInScreen">
    <AuthStack.Screen name="LogInScreen" component={LogInScreen} />
    </AuthStack.Navigator>
);

export default AuthNavigator;