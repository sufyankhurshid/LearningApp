import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import styles from './styles';
import images from '../../../themes/Images';
import {AppStyles} from '../../../themes';
import CustomButton from '../../../components/CustomButton';

function Profile() {
  const renderTopContainer = () => (
    <View style={styles.topContainer}>
      <Image source={images.rightOrange} style={styles.orangeStyle} />
      <Text style={styles.createAccount}>Profile</Text>
    </View>
  );

  const renderMiddleContainer = () => {
    return (
      <View style={styles.textInput}>
        <Text style={styles.title}>Welcome</Text>

        <CustomButton
          title={'SAVE'}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderTopContainer()}
      {renderMiddleContainer()}
    </SafeAreaView>
  );
}

export default Profile;
