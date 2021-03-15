import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppIcon = ({ name, color, size }) => (
<MaterialCommunityIcons
{
  ...Platform.select({
    ios: {
      name: `${name}`,
      size: 35 + size,
      color: `${color}`
    },
    android: {
      name: `${name}`,
      size: 35 + size,
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
