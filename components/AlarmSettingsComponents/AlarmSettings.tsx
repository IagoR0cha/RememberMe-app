import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons'

import AlarmSettingsInterface from '../../interfaces/AlarmSettingsInterface';

interface Props {
  save(alarmSettings: AlarmSettingsInterface): void,
  changeAlarmsQuantity(itemValue: number): void,
  style?: Object
}

export default function AlarmSettings(props: Props) {
  const { save, changeAlarmsQuantity, style } = props;

  const colorScheme = useColorScheme();
  const [alarmsQuantity, setAlarmsQuantity] = useState(3);
  const [alarmsRecurrence, setAlarmsRecurrence] = useState('every_day');
  const [recurrenceQuantity, setRecurrenceQuantity] = useState(1);

  function addRecurrence() {
    if (recurrenceQuantity < 7) {
      const newQuantity = recurrenceQuantity + 1;
      setRecurrenceQuantity(newQuantity);
    }
  }

  function removeRecurrence() {
    if (recurrenceQuantity > 2) {
      const newQuantity = recurrenceQuantity - 1;
      setRecurrenceQuantity(newQuantity);
    }
  }

  return (
    <View style={{ ...styles.alarmSettingsContainer, backgroundColor: Colors[colorScheme].background, ...style}}>
      <TouchableOpacity
        style={{ ...styles.saveButton, backgroundColor: Colors[colorScheme].successColor }}
        onPress={() => save({ alarmsQuantity, alarmsRecurrence, recurrenceQuantity })}
      >
        <Text style={{ color: Colors[colorScheme].textLight, ...styles.textSaveButton }}>
          Salvar
        </Text>
      </TouchableOpacity>
      <Picker
        style={{ ...styles.picker, color: Colors[colorScheme].textGray }}
        selectedValue={alarmsQuantity}
        onValueChange={(itemValue) => {
          setAlarmsQuantity(itemValue);
          changeAlarmsQuantity(itemValue);
        }}
      >
        <Picker.Item label="1 alarme diário" value={1} />
        <Picker.Item label="2 alarmes diários" value={2} />
        <Picker.Item label="3 alarmes diários" value={3} />
        <Picker.Item label="4 alarmes diários" value={4} />
      </Picker>
      <Picker
        style={{ ...styles.picker, color: Colors[colorScheme].textGray }}
        selectedValue={alarmsRecurrence}
        onValueChange={(itemValue) => {
          setAlarmsRecurrence(itemValue);
        }}
      >
        <Picker.Item label="Todos os dias" value={'every_day'} />
        <Picker.Item label="Customizado" value={'custom'} />
      </Picker>
      {alarmsRecurrence === 'custom' ?
        <View style={styles.recurrenceControlContainer}>
          <TouchableOpacity
            style={styles.recurrenceButton}
            disabled={recurrenceQuantity <= 2}
            onPress={removeRecurrence}
          >
            <FontAwesome name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.recurrenceText} >
            {`a cada ${recurrenceQuantity} dias`}
          </Text>
          <TouchableOpacity
            style={styles.recurrenceButton}
            disabled={recurrenceQuantity >= 7}
            onPress={addRecurrence}
          >
            <FontAwesome name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      : null}
    </View>
  )
}

const styles = StyleSheet.create({
  alarmSettingsContainer: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textSaveButton: {
    fontWeight: 'bold',
    fontSize: 18
  },
  picker: {
    marginHorizontal: 10
  },
  recurrenceControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  recurrenceButton: {
    borderRadius: 50,
    width: 43,
    height: 43,
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recurrenceText: {
    marginHorizontal: 14,
    fontSize: 16,
    fontWeight: 'bold'
  }
});