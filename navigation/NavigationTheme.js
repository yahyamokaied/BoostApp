import { DefaultTheme } from '@react-navigation/native';
import {  AppColor } from '../components/styles';
export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: AppColor.Primary,
        secondary:AppColor.Secondary,
        background: AppColor.WhiteColor
    },
};