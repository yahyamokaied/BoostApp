import React from 'react';
import { StyleSheet, StatusBar, View, Dimensions } from 'react-native';

const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

export default Screen = ( {children} ) => {
    return (
        <View style={styles.screen} >
        <StatusBar
        barStyle = "dark-content" 
        hidden = {false}
        translucent = {true}
        />
         {children}
        </View>
          );
};

const styles = StyleSheet.create({
    screen: {
        alignContent:'center',
        justifyContent:'center',
        width: ww,
        height: hh
    }
});
