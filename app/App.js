import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/Store';
import RootNavigator from './navigations/rootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
