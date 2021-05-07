import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import MissedAlarmItem from './MissedAlarmItem';

interface Alarm {
  name: string,
  time: string
}

export default function MissedAlarmsList() {
  const colorScheme = useColorScheme();

  const list: Array<Alarm> = [
    {
      name: 'Alarme 1',
      time: '9:00 - 11/03/21'
    },
    {
      name: 'Alarme 2',
      time: '15:00 - 11/03/21'
    },
  ]

  const [missedAlarms, setMissedAlarms] = useState<Array<Alarm>>([]);

  function getMisseAlarms() {
    AsyncStorage.getItem('@missed_alarms').then((resp: string | null) => {
      const alarms: Array<Alarm> = resp ? JSON.parse(resp) : [];
      setMissedAlarms(alarms);
    });
  }

  useEffect(() => {
    getMisseAlarms();
  }, [])

  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].background }} >
      <View style={{ ...styles.headerContainer, backgroundColor: Colors[colorScheme].tint }} >
        <Text style={{ ...styles.headerTitle, color: Colors[colorScheme].textLight }}>
          Alarmes Perdidos
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        {missedAlarms.length ?
          <View>
            <FlatList
              data={missedAlarms}
              renderItem={({ item, index }) => <MissedAlarmItem key={index} name={item.name} time={item.time} />}
            />
          </View>
          :
          <View style={styles.messageDefaultContainer}>
            <Text style={{ color: Colors[colorScheme].textGray }}>Nenhum alarme foi perdido</Text>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%',
    borderRadius: 10
  },
  headerContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',

    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  headerTitle: {
    fontSize: 18,
  },
  bodyContainer: {
    height: '85%',
    alignItems: 'center'
  },
  messageDefaultContainer: {
    height: '100%',
    justifyContent: 'center',
  },
});