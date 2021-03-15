import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const AppIcon = ({ name, color, size = 20 }) => (
<Icon
{
  ...Platform.select({
    ios: {
      name: `ios-${name}`,
      size: size,
      color: `${color}`
    },
    android: {
      name: `md-${name}`,
      size: size,
      color: `${color}`
    }
  })
}
/>
)

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
