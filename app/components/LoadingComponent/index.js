import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

function LoadingComponent(props) {
  const {loading} = props || {};
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={'large'} /> : null}
    </View>
  );
}

export default LoadingComponent;
