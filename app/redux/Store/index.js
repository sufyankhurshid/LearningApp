import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../Reducer';
import thunk from 'redux-thunk';

import Reactotron from '../../config/ReactotronConfig';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
export default store;
