import React from 'react';
import {Image, SafeAreaView, StatusBar, Text} from 'react-native';

import styles from './styles';
import images from '../../themes/Images';
import CustomButton from '../../components/CustomButton';
import {AppStyles, MetricsMod} from '../../themes';
import {useDispatch} from 'react-redux';
import {isLoggedIn} from '../../redux/Action/user';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';

function Home(props) {
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(isLoggedIn(false));
    navigateToScreen(props, MAIN_SCREEN.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.createAccount}>Home</Text>
      <Image source={images.rightOrange} style={styles.orangeStyle} />
      <CustomButton
        title={'Logout'}
        buttonStyle={{
          backgroundColor: AppStyles.colorSet.bgOrange,
          marginTop: MetricsMod.twoFifty,
        }}
        onPress={logout}
      />
    </SafeAreaView>
  );
}

export default Home;
