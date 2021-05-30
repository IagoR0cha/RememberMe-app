import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { FontAwesome5 } from '@expo/vector-icons';

import AlarmItemInterface from '../../interfaces/AlarmItemInterface';

interface Props {
  item: AlarmItemInterface,
  enterList(): void,
  setAlarm(): void
}

export default function AlarmItem(props: Props) {
  const { item, enterList, setAlarm } = props;
  const colorScheme = useColorScheme();
  const [status, setStatus] = useState(item.status);

  function toggleStatus() {
    setStatus(!status);
  }

  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].background }}>
      <View style={styles.header}>
        <View style={styles.alarmName}>
          <FontAwesome5 name="clock" size={20} color={Colors[colorScheme].secondaryColor} />
          <Text style={{ ...styles.textHeader, color: Colors[colorScheme].secondaryColor }}>
            {`Alarme ${item.index}`}
          </Text>
        </View>
        <Switch
          trackColor={{ false: '##767577', true: '#3AEA37' }}
          thumbColor={status ? "#fff" : "#f5f5f5"}
          ios_backgroundColor="#3e3e3e"
          value={status}
          onValueChange={toggleStatus}
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={{ ...styles.configAlarmButton, backgroundColor: Colors[colorScheme].secondaryColor }}
          onPress={setAlarm}
        >
          <Text style={styles.configAlarmText}>{item.time}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ ...styles.pillsListButton, backgroundColor: Colors[colorScheme].tint}}
          onPress={enterList}
        >
          <Text style={styles.pillsListText}>Lista de Remédios</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    marginBottom: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 5
  },
  alarmName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  body: {
    alignItems: 'center',
    marginVertical: 20,
  },
  configAlarmButton: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 40
  },
  configAlarmText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  pillsListButton: {
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  pillsListText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});