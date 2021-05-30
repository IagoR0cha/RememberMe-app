import * as React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MissedAlarmsList from '../components/MissedAlarmsComponents/MissedAlarmsList';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme'; 

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  function reloaded() {
    console.log('recarregando')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/icon.png')} />
      <MissedAlarmsList />
      <TouchableOpacity
        style={{ ...styles.buttonReload, backgroundColor: Colors[colorScheme].tint }}
        onPress={reloaded}
      >
        <View style={styles.buttonReloadContainer}>
          <MaterialIcons name="local-hospital" size={50} color={Colors[colorScheme].textLight} />
          <Text
            style={{ ...styles.textReloadContainer, color: Colors[colorScheme].textLight}}
          >
            Reabastecer
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    width: '90%'
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
  },
  buttonReload: {
    marginTop: 16,
    padding: 13,
    borderRadius: 10,
    width: '100%'
  },
  buttonReloadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textReloadContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20
  }
});
