import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {MetricsMod} from '../../themes';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return {count: state.count + 1, showText: state.showText};
//     }
//     case 'toggleShowText': {
//       return {count: state.count, showText: !state.showText};
//     }
//     default:
//       return state;
//   }
// };

function HooksPractice() {
  // const [state, dispatch] = useReducer(reducer, {count: 0, showText: false});
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  const increment = () => {
    if (counter === 5) {
      throw new Error('Counter limit exceeded...');
    } else {
      setCounter(counter => counter + 1);
      setShowText(!showText);
    }
  };

  // useLayoutEffect(() => {
  //   printLogs('useLayoutEffect');
  // }, []);
  //
  // useEffect(() => {
  //   printLogs('useEffect');
  // }, []);
  //useState..
  //useReducer..
  //useEffect.. after everything is render
  //useRef..
  //useLayoutEffect.. jb page render hony lgta h tb cal hota h
  //forwardRef...
  //useImperativeHandle
  //createContext...

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="counter"
        onPress={increment}
        // dispatch({type: 'INCREMENT'});
        // dispatch({type: 'toggleShowText'});
        // }}
      />
      <Text style={{fontSize: MetricsMod.fifty}}>{counter}</Text>
      {/*{showText && (*/}
      {/*  <Text style={{fontSize: MetricsMod.fifty}}>this is a text</Text>*/}
      {/*)}*/}
    </View>
  );
}

export default HooksPractice;
