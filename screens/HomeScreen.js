import React, {useContext} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppStyle, Screen, AppColor, AppText } from '../components/styles';
import FastImage from 'react-native-fast-image';
import AuthContext from '../auth/context';
import AppIcon from '../Assets/Icons/icons';
import ProfileImage from '../components/screens/ProfileImage';

const HomeScreen = ({ navigation }) => {


  const {
    lastCompetition,
    dailyStepsTotal,
    starPoints

  } = useContext(AuthContext);


return (
<Screen style={styles.screen}>

{/* Header 1 */}
<View style={styles.header1}>
      <FastImage
          style={styles.blurebg}
          source={require('../Assets/images/blure.png')} >
      </FastImage>
   
{/* Header 1 content */}

<View style={styles.content}>
<AppIcon name='podium' size={15} color={AppColor.WhiteColor}/>
<AppText.Text2> Competetion </AppText.Text2>
</View>

</View>

{/* Header 2 */}
  <View style={styles.header2}>
        <FastImage
        style={styles.blurebg}
        source={require('../Assets/images/blure.png')} >
        </FastImage>
    <View style={styles.header2overlay} />

        
{/* Header 2 content */}

<View style={styles.content1}>
<AppText.Text3>{ lastCompetition ? lastCompetition.description : 'No Competetion Description'}</AppText.Text3>
<AppText.Text5>{ lastCompetition ? lastCompetition.startDate+' to  '+lastCompetition.endDate: 'no start date  To  no end date'}</AppText.Text5>
</View>


  </View>

{/* Body */}
  <View style={styles.body}>
{/* Body content */}
<View style={styles.content2}>


<AppText.Text5 color={AppColor.Primary4} > Steps of the Day </AppText.Text5>

<View style={styles.steps}>
<AppText.Text1 color={AppColor.Primary4} >{ dailyStepsTotal ? dailyStepsTotal : '0'}</AppText.Text1>
<View style={styles.icon}>
<AppIcon name='run' size={8} color={AppColor.Primary4}/>
</View>
</View>

<AppText.Text5 color={AppColor.Secondary2} > StarPoints </AppText.Text5>

<View style={styles.starpoint}>
<AppText.Text1 color={AppColor.Secondary2} >{ starPoints ? starPoints : '0'}</AppText.Text1>
<View style={styles.icon}>
<AppIcon name='star' size={5} color={AppColor.Secondary2}/>
</View>
</View>

<AppText.Text3 color={AppColor.BlackColor} > Active Challenges </AppText.Text3>

<View style={styles.challenge}>
    <FastImage
            style={styles.blurebg}
            source={require('../Assets/images/blure.png')} >
    </FastImage>
      <View style={styles.flag}>
      <AppText.Text4 color={AppColor.WhiteColor} > 0 </AppText.Text4>
      <AppIcon name='star' size={-12} color={AppColor.WhiteColor}/>
      </View>
      <View style={styles.flagtitle}>
      <AppText.Text6 color={AppColor.WhiteColor} > Challenge Title </AppText.Text6>
      </View>
      <TouchableOpacity style={styles.flagbutton}>
      <AppText.Text5 color={AppColor.WhiteColor} > Done </AppText.Text5>
      <AppIcon name='pause-circle' size={-14} color={AppColor.WhiteColor}/>
      </TouchableOpacity>
</View>

</View>
</View>

<ProfileImage />

</Screen>

);
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    height: AppStyle.hh,
    width: AppStyle.ww
  },
  header1: {
    height: AppStyle.hh * 0.23 ,
  },
  blurebg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: AppColor.BlackColor
  },
  header1overlay: {
    width: '100%',
    height: '100%',
    position:'absolute',
    backgroundColor: AppColor.BlackColor,
    opacity:0.7
  },
  header2: {
    height: AppStyle.hh * 0.10,
  },
  header2overlay: {
    width: '100%',
    height: '100%',
    position:'absolute',
    backgroundColor: AppColor.Secondary2,
    opacity: 0.7
  },
  content1:{
    flexDirection:'column',
    alignSelf:'center',
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:AppStyle.hh * 0.016
    },
    content2:{
      flexDirection:'column',
      alignSelf:'center',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:AppStyle.hh * 0.008
      },
  steps:{
    width: AppStyle.ww * 0.45,
    height: AppStyle.hh * 0.06,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: AppColor.Primary4,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    marginTop: AppStyle.hh * 0.005,
    marginBottom: AppStyle.hh * 0.01
    },
    starpoint: {
      width: AppStyle.ww * 0.45,
      height: AppStyle.hh * 0.06,
      flexDirection:'row',
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor: AppColor.Secondary2,
      borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
      marginTop: AppStyle.hh * 0.005,
      marginBottom: AppStyle.hh * 0.025
    },
    challenge: {
      width: AppStyle.ww / 1.6,
      height: AppStyle.hh / 3.6,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: (AppStyle.ww + AppStyle.hh) * 0.01,
      overflow:'hidden',
      marginTop: AppStyle.hh * 0.015,
    },
    icon: {
      position:'absolute',
      right: - AppStyle.ww * 0.05
    },
    flag: {
      width: '30%',
      height: '15%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderTopLeftRadius:AppStyle.ww / 45,
      borderBottomLeftRadius:AppStyle.ww / 45,
      position:'absolute',
      top:AppStyle.hh / 40,
      right:0,
      backgroundColor: AppColor.BlackColor,
      opacity:0.6
    },
    flagtitle: {
      width: '100%',
      height: '14%',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom: AppStyle.hh * 0.042,
      backgroundColor: AppColor.BlackColor,
      opacity:0.6
    },
    flagbutton: {
      flexDirection:'row',
      width: '100%',
      height: '15%',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:0,
      backgroundColor: AppColor.Secondary,
    },
  body: {
    flex:1,
    alignItems:'center',
    backgroundColor: AppColor.WhiteColor
  }
});