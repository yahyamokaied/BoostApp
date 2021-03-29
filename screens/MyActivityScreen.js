import React, {useContext} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Screen, AppText, AppStyle, AppColor } from '../components/styles';
import {AppButton} from '../components/styles/AppButton';
import FastImage from 'react-native-fast-image';
import AppIcon from '../Assets/Icons/icons';
import AuthContext from '../auth/context';
import AddActivity from '../components/screens/AddActivity';
import ActivityHUD from '../components/screens/ActivityHUD';
import { useState } from 'react';


const MyActivityScreen = ({ navigation }) => {

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
    modalVisible,setModalVisible,
    pickerActive, setPickerActive,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    completedActivity,setCompletedActivity,
    allActivities,setAllActivities,
    isEditActivity,setIsEditActivity
  } = useContext(AuthContext);

  const [stepType,setStepType] = useState('Weekly');


  const renderItem = ({ item }) => (
    <ActivityHUD
    actId={item.id}
    activityName={item.activityType}
    activityDuration={item.duration}
    activityIntensity={item.intensity}
    activityDate={item.startTime.toString().substring(5,7) + ' / ' + item.startTime.toString().substring(8,10)}
    activityStarpoint={item.starPoints}
    activityDelete={item.id}
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

<View style={styles.content1}>
  <FastImage
        style={styles.img}
        source={ photo ? { uri:photo } : require('../Assets/images/profile.png') }
  />
<AppText.Text5>{name ? name : 'User Name' }</AppText.Text5>
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

<View style={styles.content2}>

<View style={styles.teams}>
<FastImage
        style={styles.teamimg}
        source={ require('../Assets/images/team.png') }
/>
{/* <FastImage
        style={styles.teamimg}
        source={ photo ? { uri:photo } : require('../Assets/images/profile.png') }
/> */}
<View style={styles.teamtext}>

<AppText.Text6 color={AppColor.WhiteColor} >My Team</AppText.Text6>
<AppText.Text6 color={AppColor.WhiteColor} > Team Name </AppText.Text6>
<View style={styles.teamstarpoint}>
<AppText.Text5 color={AppColor.WhiteColor} > 0 </AppText.Text5>
<AppIcon name='star' size={-12} color={AppColor.WhiteColor}/>
</View>


</View>

</View>

<View style={styles.stars}>
<AppText.Text6 color={AppColor.WhiteColor} > StarPoints </AppText.Text6>
<View style={styles.starpoint}>
<AppText.Text3 color={AppColor.WhiteColor} >{ starPoints ? starPoints : '0'}</AppText.Text3>
<View style={styles.icon}>
<AppIcon name='star' size={-8} color={AppColor.WhiteColor}/>
</View>
</View>
</View>


</View>


</View>

{/* Body */}
  <View style={styles.body}>
{/* Body content */}

<AppText.Text3 color={AppColor.BlackColor} > Steps </AppText.Text3>

  

{/*
{ pickerContent.map((item, index) => (

<Picker.Item key={index} label={item} value={item} onPress={() => console.log('pressed')}/>

))}
*/}

<View style={styles.steps}>


{stepType === 'Daily' ? 
      <View style={styles.colno}>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>6000</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00001 * 10000}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Today</AppText.Text6>
      </View>

      </View>

: null}

{stepType === 'Weekly' ? 
      <View style={styles.colno}>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>6000</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 15000}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Mon</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>1200</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 1200}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Tue</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>300</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 300}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Wed</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>1500</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 1500}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Thu</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>1500</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 1500}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Fri</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>4400</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 4400}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Sat</AppText.Text6>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text6 color={AppColor.DarkGray}>3200</AppText.Text6>
      <View style={[styles.graph,{height:AppStyle.hh * 0.000008 * 3200}]} />
      <AppText.Text6 color={AppColor.BlackColor}>Sun</AppText.Text6>
      </View>
      </View>

: null}


{stepType === 'Yearly' ? 
      <View style={styles.colno}>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 490000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Jan</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 320001}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Feb</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 300000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Mar</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 200000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Apr</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 320000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>May</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 100000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Jun</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 100000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Jul</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 432000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Aug</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 154000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Sep</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 100000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Oct</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>45K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 450000}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Nov</AppText.Text7>
      </View>

      <View style={styles.graphcol}>
      <AppText.Text7 color={AppColor.DarkGray}>60K</AppText.Text7>
      <View style={[styles.graph,{height:AppStyle.hh * 0.00000028 * 15400}]} />
      <AppText.Text7 color={AppColor.BlackColor}>Dec</AppText.Text7>
      </View>


      </View>

: null}



          <View style={styles.stepbuttons}>
            
<AppButton onPress={() => setStepType('Daily') }
        title='Daily'
        backgroundColor={stepType === 'Daily' ? AppColor.DarkGray : AppColor.BlackColor}
        width={AppStyle.ww / 3.8}
        height={AppStyle.hh / 25}
        marginHorizontal={AppStyle.ww / 80}
        marginVertical={AppStyle.hh / 120}
/>
<AppButton onPress={() => setStepType('Weekly') }
        title='Weekly'
        backgroundColor={stepType === 'Weekly' ? AppColor.DarkGray : AppColor.BlackColor}
        width={AppStyle.ww / 3.8}
        height={AppStyle.hh / 25}
        marginHorizontal={AppStyle.ww / 80}
        marginVertical={AppStyle.hh / 120}
/>
<AppButton onPress={() => setStepType('Yearly') }
        title='Yearly'
        backgroundColor={stepType === 'Yearly' ? AppColor.DarkGray : AppColor.BlackColor}
        width={AppStyle.ww / 3.8}
        height={AppStyle.hh / 25}
        marginHorizontal={AppStyle.ww / 80}
        marginVertical={AppStyle.hh / 120}
/>

</View>

</View>



<AppText.Text3 color={AppColor.BlackColor} > Completed Activities </AppText.Text3>


<View style={styles.activities}>

<FlatList
        data={completedActivity}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key'+index}
        extraData={id}
      />


<AppButton onPress={() => { setModalVisible(true) ,setModalVisible(true) , setPickerType('Press to select') ,setPickerDuration('Press to select'), setIsEditActivity(false) } }
        title='Add Activity'
        width={AppStyle.ww / 3.8}
        height={AppStyle.hh / 25}
        alignSelf='flex-end'
        backgroundColor={AppColor.Secondary}
        marginHorizontal={AppStyle.ww / 40}
        marginVertical={AppStyle.hh / 80}
/>

</View>


</View>
<AddActivity />


</Screen>


);
};


export default MyActivityScreen;

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
    position:'absolute',
    top: AppStyle.hh / 15,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:AppStyle.hh * 0.015
    },
  content2:{
    flexDirection:'row',
    alignSelf:'center',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:AppStyle.hh * 0.005,
    },
  stars:{
    width:'35%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    paddingHorizontal:AppStyle.ww * 0.03,
    paddingTop:AppStyle.hh * 0.004,
    },
    teams:{
      width:'65%',
      height:'100%',
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:AppStyle.ww * 0.03,
      },
      teamtext: {
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
      },
      teamstarpoint : {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
  icon: {
    position:'absolute',
    right: - AppStyle.ww * 0.05
  },
  flag: {
    width: '40%',
    height: '16%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:AppStyle.ww / 40,
    borderBottomLeftRadius:AppStyle.ww / 40,
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
    bottom: AppStyle.hh * 0.036,
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
    backgroundColor: AppColor.Secondary2,
  },
  body: {
    flex:1,
    alignItems:'center',
    backgroundColor: AppColor.WhiteColor,
    marginVertical:AppStyle.hh * 0.015
  },
  img: {
    width: (AppStyle.hh + AppStyle.ww) * 0.05  ,
    height: (AppStyle.hh + AppStyle.ww) * 0.05  ,
    borderRadius: (AppStyle.hh + AppStyle.ww) * 0.025,
    borderColor:AppColor.Primary2,
    borderWidth: 1,
    marginVertical:AppStyle.hh * 0.01
  },
  teamimg: {
    width: (AppStyle.hh + AppStyle.ww) * 0.04  ,
    height: (AppStyle.hh + AppStyle.ww) * 0.04  ,
    borderRadius: (AppStyle.hh + AppStyle.ww) * 0.025,
    borderColor:AppColor.Primary2,
    borderWidth: 1,
    marginVertical:AppStyle.hh * 0.01
  },
  starpoint: {
    width: AppStyle.ww * 0.25,
    height: AppStyle.hh * 0.042,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: AppColor.WhiteColor,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    marginTop: AppStyle.hh * 0.005,
    marginBottom: AppStyle.hh * 0.01
  },
  icon: {
    position:'absolute',
    right: - AppStyle.ww * 0.03
  },
  activities: {
    width:'90%',
    height: '35%',
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    flexDirection:'column',
    alignItems:'center',
    borderWidth:0.25,
    borderColor: AppColor.Secondary2,
    marginVertical:AppStyle.hh * 0.008
  },
  steps: {
    width:'90%',
    height: '38%',
    flexDirection:'column',
    alignItems:'flex-start',
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    borderWidth:0.25,
    borderColor: AppColor.LightGray,
    marginVertical:AppStyle.hh * 0.008,
  },
  colno: {
    width:'100%',
    height:'75%',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
    padding: AppStyle.ww / 100

  },
  graphcol: {
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  graph: {
    width: AppStyle.ww * 0.04,
    backgroundColor:AppColor.LightGray,
  },
  graphtext: {
    height: '20%',
  },
  stepbuttons : {
    flexDirection:'row',
    width:'100%',
    height:'22%',
    justifyContent:'center',
  },
  completed: {
    width:'95%',
    height:AppStyle.hh * 0.05,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderColor:AppColor.Secondary2,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.009,
    borderWidth:0.3
  },
  starts : {
    width:'15%',
    height:'80%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: AppColor.Secondary,
    borderRadius: (AppStyle.ww + AppStyle.hh)* 0.008,
  }
});

