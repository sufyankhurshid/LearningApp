import React, {Component} from 'react';
import styles from './styles';
import {Image, StatusBar, Text, View} from 'react-native';
import {printLogs} from '../../utils/logUtils';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import VectorIconComponent from '../VectorIconComponent';
import images from '../../themes/Images';
import {MetricsMod} from '../../themes';
import {ICON_TYPES} from '../../constants/constant';
import AppStyles from '../../themes/AppStyles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  componentDidCatch(error, errorInfo) {
    printLogs('Error', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <Image source={images.rightOrange} style={styles.orangeStyle} />
          <View style={styles.textInput}>
            <VectorIconComponent
              name={'error-outline'}
              size={MetricsMod.eighty}
              color={AppStyles.colorSet.white}
              type={ICON_TYPES.MaterialIcons}
            />
            <Text style={styles.createAccount}>Something went wrong!</Text>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
