import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity} from 'react-native';
import { BarChart, YAxis, Grid, XAxis } from 'react-native-svg-charts'
import AppIcon from './Assets/Icons/icons'



const StarStatistics = (props) => {

  const axesSvg = { fontSize: 10, fill: 'black' };
  const verticalContentInset = {left: 10, right: 10, top: 10, bottom: 10, }
  const xAxisHeight = 10

  return (
    <View style={{flex: 0.75}}>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
        <Text style={{color: '#78C7C9', fontWeight: 'bold', fontSize: 20}}>'weekly'</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#78C7C9', marginRight: 3}}>44</Text>
          <AppIcon name='star' color='#78C7C9' size={5} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 0.9, justifyContent: 'flex-end' }}>
          <View style={{ height: 250, margin: 10, flexDirection: 'row' }}>
              <YAxis
                  data={props.userInfo.weeklySteps}
                  yAccessor={({ item }) => item.steg}
                  style={{ marginBottom: xAxisHeight }}
                  contentInset={verticalContentInset}
                  svg={axesSvg}

              />
              <View style={{ flex: 1}}>
                <BarChart
                  style={{ flex: 1 }}
                  contentInset={verticalContentInset}
                  svg={{ fill: '#78C7C9' }}
                  spacingInner={0.7}
                  /* data={props.userInfo.weeklySteps} */
                  data={[44,44,44,44]}
/*                   yAccessor={({ item }) => item.steg}
 */
                >
                <Grid/>
                </BarChart>
                  <XAxis
                      style={{ height: xAxisHeight }}
                      data={props.userInfo.weeklySteps}
/*                       formatLabel={(_, index) => props.userInfo.weeklySteps[ index ].dag}
 */                      contentInset={{left: 20, right: 20}}
                      svg={axesSvg}
                  />
              </View>
              </View>
          </View>
          <View style={{flex: 0.1, flexDirection: 'row',}}>
            <TouchableOpacity style={{backgroundColor: '#78C7C9', flex: 0.5, justifyContent: 'center', padding: 10}}>
            <Text style={{textAlign: 'center', color: 'white'}}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'white', flex: 0.5, justifyContent: 'center', padding: 10, }}>
            <Text style={{textAlign: 'center', color: 'black'}}>Monthly</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  )
};

export default StarStatistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
