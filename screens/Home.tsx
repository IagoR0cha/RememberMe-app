import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import MissedAlarmsList from '../components/MissedAlarmsComponents/MissedAlarmsList'; 

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/icon.png')} />
        <MissedAlarmsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    width: '85%'
  },
  logoContainer: {
    height: 100,
    width: 100,
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    maxHeight: '30%',
    maxWidth: '35%',
  }
});
