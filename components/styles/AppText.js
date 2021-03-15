

import React from 'react';
import { StyleSheet, Platform, Text, Dimensions } from 'react-native';
import * as AppColor from '../../components/styles/AppColor';

export const ww = Dimensions.get('window').width;
export const hh = Dimensions.get('window').height;




export const Text1 = ( { children, textAlign = 'center', color = AppColor.WhiteColor } ) => {
    return (
            <Text
                style={ [styles.text1, {textAlign}, {color}] }>
                {children}
            </Text>
            );
};

export const Text2 = ( { children, textAlign = 'center', color = AppColor.WhiteColor } ) => {
    return (
            <Text
                style={ [styles.text2, {textAlign}, {color}] }>
                {children}
            </Text>
            );
};

export const Text3 = ( { children, textAlign = 'center', color = AppColor.WhiteColor } ) => {
    return (
            <Text
                style={ [styles.text3, {textAlign}, {color} ] }>
                {children}
            </Text>
            );
};

export const Text4 = ( { children, textAlign = 'center', color = AppColor.WhiteColor  } ) => {
    return (
            <Text
                style={ [styles.text4, {textAlign}, {color} ] }>
                {children}
            </Text>
            );
};

export const Text5 = ( { children, textAlign = 'center', color = AppColor.WhiteColor } ) => {
    return (
            <Text
                style={ [styles.text5, {textAlign}, {color} ] }>
                {children}
            </Text>
            );
};

export const Text6 = ( { children, textAlign = 'center', color = AppColor.WhiteColor } ) => {
    return (
            <Text
                style={ [styles.text6, {textAlign}, {color} ] }>
                {children}
            </Text>
            );
};


const styles = StyleSheet.create({
    text1: {        
        fontSize: ww / 12,
        fontFamily: 'Arial',
        marginVertical: hh / 200,
        fontWeight:'bold'
    },

    text2: {        
        fontSize: ww / 14,
        fontFamily: 'Arial',
        marginVertical: hh / 200,
        fontWeight:'bold'
    },

    text3: {        
        fontSize: ww / 20,
        fontFamily: 'Arial',
        marginVertical: hh / 500,
        fontWeight:'bold'
    },

    text4: {        
        fontSize: ww / 20,
        fontFamily: 'Arial',
        marginVertical: hh / 500,
    },

    text5: {        
        fontSize: ww / 24,
        fontFamily: 'Arial',
        marginVertical: hh / 500,
    },

    text6: {        
        fontSize: ww / 28,
        fontFamily: 'Arial',
        marginVertical: hh / 500,
    },

    text7: {        
        fontSize: ww / 34,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        marginVertical: hh / 500
    }
});