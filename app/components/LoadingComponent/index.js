import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

function LoadingComponent(props) {
  const {loading, containerStyle, color} = props || {};
  return (
    <View style={[styles.container, containerStyle]}>
      {loading ? <ActivityIndicator size={'large'} color={color} /> : null}
    </View>
  );
}

export default LoadingComponent;
