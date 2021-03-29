import React, {useEffect, useState, useContext} from 'react';
import { View,Modal,TouchableOpacity} from 'react-native';
import {AppColor, AppStyle} from '../styles';
import AppIcon from '../../Assets/Icons/icons';

import AuthContext from '../../auth/context';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';

import DatePicker from 'react-native-date-picker';

export default AppPicker = () => {

const {

    pickerActive, setPickerActive,
    pickerContent,setPickerContent,
    pickerId,setPickerId,
    pickerType,setPickerType,
    pickerDuration,setPickerDuration,
    pickerIntensity,setPickerIntensity,
    pickerDate,setPickerDate,
    isDatePicker,setIsDatePicker,
  } = useContext(AuthContext);


  let info = moment().format().toString().substring(11,23)
  var day1 = moment().format().toString().substring(8,10)
  var month1 = moment().format().toString().substring(5,7)
  var year1 = moment().format().toString().substring(0,4)
  
  let dateStartToday = year1+'-'+month1+'-'+day1+info

  var min = new Date(year1+"-01-01");
  var max = new Date(year1+"-12-31");

const [val, setVal] = useState(null);
const [date, setDate] = useState(new Date())

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
padding: AppStyle.hh / 50,
}}
>


<View style={{borderRadius:30,backgroundColor:'white',
width:'110%',height:'40%',
position:'absolute',bottom:-AppStyle.hh / 20,
alignItems:'center',alignSelf:'center',justifyContent: isDatePicker ? 'flex-start' : 'flex-end',
shadowColor: "#000",
shadowOffset: { width: 0,height: 11},
shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 22,
}}
onPress={() => setPickerActive(false)}>


{ isDatePicker ?

<DatePicker
date={date}
mode="datetime"
textColor={AppColor.TextDark}
onDateChange={setPickerDate}
/>

    :

<Picker
selectedValue={val}
style={{height: AppStyle.hh / 2, width: '100%', justifyContent:'center',
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
style={{alignItems:'center', justifyContent:'center',position:'absolute',bottom:AppStyle.hh / 10}} >

<AppIcon name='check-circle' color={AppColor.Secondary2} size={10} />

</TouchableOpacity>

</View>


</View>
</Modal>
)

}