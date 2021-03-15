import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
let test = 35
const Icon = ({ name, color, size }) => (
<Ionicons
{
  ...Platform.select({
    ios: {
      name: `ios-${name}`,
      size: test,
      color: `${color}`
    },
    android: {
      name: `md-${name}`,
      size: 35 + size,
      color: `${color}`
    }
  })
}
/>
)

export default Icon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
