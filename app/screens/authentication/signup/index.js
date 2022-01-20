import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import images from '../../../themes/Images';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/CustomButton';
import {AppStyles, Images, MetricsMod} from '../../../themes';
import {navigateToScreen} from '../../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../../constants/screens';
import RadioButton from '../../../components/RadioButton';
import * as ImagePicker from 'react-native-image-crop-picker';
import {GENDER_LIST} from '../../../constants/constant';
import TextInputMask from '../../../components/textInputMask';

function Signup(props) {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [item, setItem] = useState({});
  const [profileImage, setProfileImage] = useState('');

  const onPress = item => {
    setItem(item);
  };

  const renderBottomContainer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.dontHave}>Don’t have an account? </Text>
        <Text
          style={styles.signUp}
          onPress={() => navigateToScreen(props, MAIN_SCREEN.LOGIN)}>
          LOGIN
        </Text>
      </View>
    );
  };

  const renderRadioContainer = () => {
    return (
      <View style={styles.radioContainer}>
        <Text style={styles.title}>Gender</Text>
        <RadioButton data={GENDER_LIST} selectedItem={item} onPress={onPress} />
      </View>
    );
  };

  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfileImage(image.path);
    });
  };

  const renderFieldsContainer = () => {
    return (
      <View style={styles.textInput}>
        <Image source={images.rightOrange} style={styles.orangeStyle} />
        <Text style={styles.createAccount}>Create Account</Text>

        <TouchableOpacity
          style={styles.imageView}
          activeOpacity={0.3}
          onPress={takePhotoFromLibrary}>
          <Image
            source={profileImage ? {uri: profileImage} : Images.addImage}
            style={styles.userImage}
          />
        </TouchableOpacity>

        <CustomTextInput
          placeholder={'First name'}
          onChange={setFirstname}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
        />

        <CustomTextInput
          placeholder={'Last name'}
          onChange={setLastname}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
        />

        <CustomTextInput
          placeholder={'Email'}
          onChange={setEmail}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
        />

        <CustomTextInput
          placeholder={'Password'}
          onChange={setPassword}
          secureTextEntryinputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
        />

        <CustomTextInput
          placeholder={'Confirm password'}
          onChange={setConfirmPassword}
          secureTextEntryinputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
        />
        <TextInputMask />

        {renderRadioContainer()}

        <CustomButton
          title={'SIGN UP'}
          buttonStyle={{
            backgroundColor: AppStyles.colorSet.bgOrange,
            marginVertical: MetricsMod.baseMargin,
          }}
          onPress={() => navigateToScreen(props, MAIN_SCREEN.LOGIN)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {renderFieldsContainer()}
      </ScrollView>
      {renderBottomContainer()}
    </SafeAreaView>
  );
}

export default Signup;
