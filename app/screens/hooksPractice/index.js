import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {MetricsMod} from '../../themes';

function HooksPractice() {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  const increment = () => {
    setCounter(counter => counter + 1);
    setShowText(!showText);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="counter" onPress={increment} />
      <Text style={{fontSize: MetricsMod.fifty}}>{counter}</Text>
      {showText && (
        <Text style={{fontSize: MetricsMod.fifty}}>this is a text</Text>
      )}
    </View>
  );
}

export default HooksPractice;
