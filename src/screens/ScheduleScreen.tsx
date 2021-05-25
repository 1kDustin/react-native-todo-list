import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../screens/styles/ScheduleScreenStyle';
import {ScrollingCalendar} from '../components/ScrollingCalender';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule</Text>
      </View>
      <ScrollingCalendar />
    </View>
  );
};

export default ScheduleScreen;
