import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {DatePill} from './DatePill';
import {styles} from './styles/ScrollingCalendarStyle';
import dayjs from 'dayjs';
import ModalDropdown from 'react-native-modal-dropdown';

export const ScrollingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('6');
  const [selectedMonth, setSelectedMonth] = useState('August');
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const month = dayjs().month(selectedMonthIndex).format('MMM');
  const unformattedMonth = dayjs().month(selectedMonthIndex);
  const daysInMonth = dayjs(unformattedMonth).daysInMonth();
  console.log(month);
  console.log(daysInMonth);
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.selectedDate}>{`${month} ${selectedDate}`}</Text>
        <ModalDropdown
          defaultValue={selectedMonth}
          onSelect={(index, value) => {
            setSelectedMonth(value);
            setSelectedMonthIndex(index);
          }}
          style={styles.dropDownButton}
          textStyle={styles.dropdownItemText}
          dropdownStyle={styles.dropdownStyle}
          options={[
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'Novemer',
            'December',
          ]}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array.from(Array(daysInMonth).keys())}
        renderItem={({item, index}) => (
          <DatePill dateNumber={index + 1} month={month} />
        )}
      />
    </View>
  );
};
