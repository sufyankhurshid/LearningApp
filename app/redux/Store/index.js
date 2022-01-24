import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import reducers from '../Reducer';
import thunk from 'redux-thunk';
import Reactotron from '../../config/ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
