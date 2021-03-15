import React, {useEffect, useState, useContext} from 'react';
import { View, Button, Text, Modal, StyleSheet, TextInput, TouchableHighlight, ImageBackground ,TouchableOpacity} from 'react-native';
import {AppColor} from '../styles';
import * as AppText  from '../styles/AppText';
import AppIcon from '../../Assets/Icons/icons';

import AuthContext from '../../auth/context';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';



export default AppPicker = () => {

const {

    pickerActive, setPickerActive,
    pickerContent,setPickerContent,
    pickerId,setPickerId,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    pickerIntensity,setPickerIntensity,
    isDatePicker,setIsDatePicker,
  } = useContext(AuthContext);


  let info = moment().format().toString().substring(11,23)
  var day1 = moment().format().toString().substring(8,10)
  var month1 = moment().format().toString().substring(5,7)
  var year1 = moment().format().toString().substring(0,4)
  
  let dateStartToday = year1+'-'+month1+'-'+day1+info

const [val, setVal] = useState(null);
/* 
const [year, setYear] = useState( day1 ||'2021');
const [month, setMonth] = useState( month1 ||'12');
const [day, setDay] = useState( year1 ||'1');

let timeNow = moment().format().toString().substring(0,19)+'.000Z';
console.log('timeNow',timeNow)
console.log('timeNow',dateStartToday) */


return (
<Modal
animationType={'slide'}
transparent={true}
visible={pickerActive}
>
<View
style={{
position: 'absolute',
width: '100%',
height: '100%',
justifyContent: 'center',
backgroundColor: 'rgba(100,100,100, 0)',
padding: 20,
}}
>


<View style={{borderRadius:30,backgroundColor:'white',
width:'110%',height:'30%',opacity:0.96,
position:'absolute',bottom:-40,
alignItems:'center',alignSelf:'center',
shadowColor: "#000",paddingVertical:20,marginVertical:20,
shadowOffset: { width: 0,height: 11},
shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 22,
}}
onPress={() => setPickerActive(false)}>


{isDatePicker ?

<View style={{flexDirection:'row'}}>


<AppText.Text2>{year1} / </AppText.Text2>
<AppText.Text2>{month1} / </AppText.Text2>

    <TextInput
    style={{width:80, height:30, borderColor:'red', borderWidth:1, textAlign:'center',marginVertical:10}}
    placeholder="Type here to translate!"
    onChangeText={text => setDay(text)}
    defaultValue={day1}
  />

</View>

    :

<Picker
selectedValue={val}
style={{height: 100, width: '100%', justifyContent:'center',
marginVertical:10}}
onValueChange={(value, itemIndex) =>
{
setVal(value)
{

  if ( ["low","medium","high"].includes(value) ) setPickerIntensity(value)
  else if( ["30","60","90","120","150","180"].includes(value) ) setPickerDuration(value)
  else setPickerType(value)

} 
console.log("Picker: ",value)
console.log("pickerType: ",pickerType)
console.log("pickerDuration: ",pickerDuration)
console.log("pickerIntensity: ",pickerIntensity)
}
}>
{ pickerContent.map((item, index) => (

<Picker.Item key={index} label={item} value={item} onPress={() => console.log('pressed')}/>

))}
</Picker>
}




<TouchableOpacity onPress={ () => setPickerActive(false) }
style={{alignItems:'center', justifyContent:'center'}} >

<AppIcon name='check-circle' color={AppColor.Secondary2} size={4} />

</TouchableOpacity>

</View>


</View>
</Modal>
)

}