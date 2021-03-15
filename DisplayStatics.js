import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppIcon from './Assets/Icons/icons'

const DisplayStatistics = () => {


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={{ padding: 5, right: 4, alignSelf: 'flex-end', backgroundColor:'#D98E00' }} onPress={() => toggle()}>
            <AppIcon name='swap' color='white' size={0} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default DisplayStatistics;

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 0.7,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#D9D9D9',
    backgroundColor: '#FDFDFD'
  },
});
