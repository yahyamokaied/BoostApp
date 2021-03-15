import React, {useContext} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Screen, AppStyle, AppColor } from '../components/styles';
import FastImage from 'react-native-fast-image';
import * as AppText from '../components/styles/AppText';
import AuthContext from '../auth/context';
import ProfileImage from '../components/screens/ProfileImage';
import Challenge from '../components/screens/Challenge';
import AppIcon from '../Assets/Icons/icons';

const CompetitionScreen = ({ navigation }) => {

    const {
        competitions,challenges
      } = useContext(AuthContext);
      
      const renderItem = ({ item }) => (
        <Challenge
        challengeId={item.challengeId}
        challengeTitle={item.title}
        challengeDescription={item.description}
        challengeImage={item.image}
        challengeStarpoint={0}
        />
      );



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
<AppIcon name='run' size={15} color={AppColor.WhiteColor}/>
<AppText.Text2> Challenges </AppText.Text2>
</View>

</View>

{/* Body */}
  <View style={styles.body}>
{/* Body content */}


      <FlatList
        data={challenges}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
</View>

<ProfileImage />

</Screen>

);
};


export default CompetitionScreen;

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
    resizeMode: 'cover',
    backgroundColor: AppColor.BGColor
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
  content:{
    position:'absolute',
    top: AppStyle.hh / 15,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    },
  body: {
    flex:1,
    alignItems:'center',
    backgroundColor: AppColor.WhiteColor
  }
});
  
