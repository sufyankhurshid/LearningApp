import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

let reactotron = {};

if (!__DEV__) {
  console.tron = {
    log: () => {},
    warn: () => {},
    error: () => {},
  };
} else {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  const host = scriptURL.split('://')[1].split(':')[0];

  reactotron = Reactotron.configure({
    name: 'LearningApp',
    host,
    clientId: 'reactotronClient',
  })
    // .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

  reactotron.clear();

  console.tron = reactotron;
}

export default reactotron;
