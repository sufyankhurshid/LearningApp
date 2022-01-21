import React, {useEffect} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import images from '../../../themes/Images';
import {AppStyles} from '../../../themes';
import CustomButton from '../../../components/CustomButton';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';

function Support() {
  const number = '3111722288';
  const mail = 'sufyankhurshid405@gmail.com';

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const openURL = async url => {
    const isValid = await Linking.openURL(url);
    if (isValid) {
      await Linking.openURL(url);
    } else {
      alert('URL is invalid...');
    }
  };

  const renderTextContainer = () => {
    return (
      <View style={styles.textInput}>
        <Text style={styles.title}>Need some helps?</Text>
        <Text style={styles.description}>
          Get lost? Don't know use? Feel free to get in touch with us
        </Text>
      </View>
    );
  };

  const renderButtonContainer = () => (
    <View style={styles.buttonContainer}>
      <CustomButton
        title={'Contact us'}
        buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
        onPress={() => openURL(`tel:+${number}`)}
      />
      <CustomButton
        title={'Frequently asked questions'}
        buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
        onPress={() => openURL(`mailto:${mail}`)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image source={images.rightOrange} style={styles.orangeStyle} />
      <Text style={styles.createAccount}>Support</Text>
      {renderTextContainer()}
      {renderButtonContainer()}
    </SafeAreaView>
  );
}

export default Support;
