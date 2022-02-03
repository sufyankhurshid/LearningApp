import React from 'react';
import persist from './redux/Store';
import Toast from 'react-native-toast-message';
import Provider from 'react-redux/lib/components/Provider';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './navigations/rootNavigator';
import ErrorBoundary from './components/ErrorBoundary';

const persistStore = persist();

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <ErrorBoundary>
          <RootNavigator />
          <Toast />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
