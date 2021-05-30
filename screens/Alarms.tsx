import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';

import AlarmSettingsInterface from '../interfaces/AlarmSettingsInterface';
import AlarmSettings from '../components/AlarmSettingsComponents/AlarmSettings';
import AlarmItemInterface from '../interfaces/AlarmItemInterface';
import AlarmItem from '../components/AlarmItemComponents/AlarmItem';

export default function Alarms() {
  const colorScheme = useColorScheme();
  const [alarmsQuantity, setAlarmsQuantity] = useState(3);
  const [alarmsItems, setAlarmsItems] = useState<Array<AlarmItemInterface>>([]);

  function save(alarmSettings: AlarmSettingsInterface) {
    const { alarmsQuantity, alarmsRecurrence, recurrenceQuantity } = alarmSettings;
    console.log('Quantidade de alarme', alarmsQuantity);
    console.log('Recorrência do alarme', alarmsRecurrence);
    console.log('Quantidade da recorrência', recurrenceQuantity);
  }

  function createList(alarms: number): Promise<Array<AlarmItemInterface>> {
    const promise: Promise<Array<AlarmItemInterface>> = new Promise((resolve) => {
      let alarmItemsCurrent = [];

      for (let i = 0; i < alarms; i++) {
        alarmItemsCurrent.push({ index: i+1, time: '00:00', status: true });
      }

      resolve(alarmItemsCurrent);
    });

    return promise;
  }

  async function alarmsQuantityController(alarms: number) {
    createList(alarms).then((alarmItemsCurrent) => {
      setAlarmsQuantity(alarms);
      setAlarmsItems(alarmItemsCurrent);
    })
  }

  function enterList() {
    console.log('entrando na lista');
  }

  function setAlarm() {
    console.log('configurando o alarme')
  }

  useEffect(() => {
    alarmsQuantityController(3);
  }, [])

  return (
    <ScrollView style={styles.list} >
      <AlarmSettings
        style={styles.alarmSetting}
        save={save}
        changeAlarmsQuantity={alarmsQuantityController}
      />
      {alarmsItems.map((item) => (
        <AlarmItem key={item.index} item={item} enterList={enterList} setAlarm={setAlarm} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 18,
  },
  alarmSetting: {
    marginTop: 40
  }
});
