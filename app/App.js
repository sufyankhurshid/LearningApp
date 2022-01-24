import React from 'react';
import {Provider} from 'react-redux';

import RootNavigator from './navigations/rootNavigator';
import persist from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const persistStore = persist();

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
