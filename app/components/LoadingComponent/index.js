import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

function LoadingComponent(props) {
  const {loading, containerStyle} = props || {};
  return (
    <View style={[styles.container, containerStyle]}>
      {loading ? <ActivityIndicator size={'large'} /> : null}
    </View>
  );
}

export default LoadingComponent;
