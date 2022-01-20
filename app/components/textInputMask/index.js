import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';

function TextInputMask(props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone number</Text>
      <View style={styles.input}>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(999)',
          }}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
    </View>
  );
}

export default TextInputMask;
