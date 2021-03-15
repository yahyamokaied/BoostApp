import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { AppStyle, AppColor, AppText } from './index';

export const AppButton = ( {
    title,
    onPress,
    width = AppStyle.ww / 3,
    height = AppStyle.hh / 22,
    borderRadius = AppStyle.ww  / 50,
    backgroundColor = AppColor.BlackColor,
    color = 'white',
    fontWeight = 'bold' ,
    alignSelf='center',
    ...otherProps
} ) => {

return (
<TouchableOpacity
  style={[styles.touchbutton, {width}, {height}, {borderRadius}, {backgroundColor}, {alignSelf}, {...otherProps} ]}
  onPress={onPress}
>
    <AppText.Text6 style= { [styles.text, {color}, {fontWeight} ] } >
    {title}
    </AppText.Text6>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({

    touchbutton : {
        justifyContent: 'center',
        alignItems:'center'
    },
});