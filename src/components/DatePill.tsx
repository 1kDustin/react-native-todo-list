import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/DatePillStyle';

export const DatePill = ({dateNumber, month}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
      style={isPressed === false ? styles.container : styles.pressedContainer}
      onPress={() => setIsPressed(true)}>
      <Text style={styles.dateNumber}>{dateNumber}</Text>
      <Text style={styles.month}>{month}</Text>
    </TouchableOpacity>
  );
};
