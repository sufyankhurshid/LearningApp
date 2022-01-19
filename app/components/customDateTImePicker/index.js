import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function CustomDateTimePicker(props) {
  const {open, setSelectedDate} = props || {};
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  setSelectedDate(date);

  return (
    <View>
      {open && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default CustomDateTimePicker;
