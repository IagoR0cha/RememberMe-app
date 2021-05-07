import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import useColorsScheme from '../../hooks/useColorScheme';

interface Props {
  name: string,
  time: string,
}

export default function MissedAlarmItem(props: Props) {
  const colorScheme = useColorsScheme();

  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].missedAlarmColor }}>
      <Text style={{ ...styles.name, ...styles.text, color: Colors[colorScheme].textDark}}>
        {props.name}
      </Text>
      <Text style={{ ...styles.text, color: Colors[colorScheme].textDark}}>
        {props.time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginTop: 20,

    borderRadius: 30
  },
  text: {
    fontSize: 18
  },
  name: {
    fontWeight: 'bold',
  }
});