import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';

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
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {SignupSchema} from './schema';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {boolean} from 'yup';
import {useDispatch} from 'react-redux';
import {createUsers} from '../../../redux/Action/user';
import DatePicker from 'react-native-datepicker';

function Signup(props) {
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);

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

  const takePhotoFromLibrary = async () => {
    const image = await ImagePicker.openPicker({
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
    });
    setProfileImage({uri: image?.path});
  };

  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
  }) => {
    return (
      <View style={styles.textInput}>
        <Image source={images.rightOrange} style={styles.orangeStyle} />
        <Text style={styles.createAccount}>Create Account</Text>

        <TouchableOpacity
          style={styles.imageView}
          activeOpacity={0.3}
          onPress={takePhotoFromLibrary}>
          <Image
            source={profileImage ? profileImage : Images.addImage}
            style={styles.userImage}
          />
        </TouchableOpacity>

        <CustomTextInput
          placeholder={'First name'}
          onChange={handleChange('firstname')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.firstname}
          touched={touched?.firstname}
          handleBlur={handleBlur('firstname')}
        />

        <CustomTextInput
          placeholder={'Last name'}
          onChange={handleChange('lastname')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.lastname}
          touched={touched?.lastname}
          handleBlur={handleBlur('lastname')}
        />

        <CustomTextInput
          placeholder={'Email'}
          onChange={handleChange('email')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.email}
          touched={touched?.email}
          handleBlur={handleBlur('email')}
        />

        <CustomTextInput
          placeholder={'Password'}
          onChange={handleChange('password')}
          secureTextEntry
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.password}
          touched={touched?.password}
          handleBlur={handleBlur('password')}
        />

        <CustomTextInput
          placeholder={'Confirm password'}
          onChange={handleChange('confirmPassword')}
          secureTextEntry
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.confirmPassword}
          touched={touched?.confirmPassword}
          handleBlur={handleBlur('confirmPassword')}
        />

        <MaskInput
          style={styles.input}
          value={values?.phoneNumber}
          onChangeText={handleChange('phoneNumber')}
          keyboardType="numeric"
          returnKeyType="next"
          returnKeyLabel="next"
          placeholder={'Phone number'}
          placeholderTextColor={AppStyles.colorSet.white}
          mask={[
            '(',
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          onChange={handleChange('phoneNumber')}
          errors={errors?.phoneNumber}
          touched={touched?.phoneNumber}
          handleBlur={handleBlur('phoneNumber')}
        />

        {boolean(errors?.phoneNumber && touched?.phoneNumber) ? (
          <Text style={styles.error}>{errors?.phoneNumber}</Text>
        ) : null}

        <DatePicker
          style={styles.datePicker}
          date={values?.dateOfBirth}
          mode="date"
          placeholder="Select Date of birth"
          format="YYYY-MM-DD"
          maxDate="2022-01-21"
          minDate="1994-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={handleChange('dateOfBirth')}
        />

        <RadioButton data={GENDER_LIST} selectedItem={item} onPress={onPress} />

        <CustomButton
          title={'SIGN UP'}
          buttonStyle={{
            backgroundColor: AppStyles.colorSet.bgOrange,
          }}
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    );
  };

  const createUser = async values => {
    await dispatch(createUsers(values));
  };

  return (
    <Formik
      initialValues={{
        id: Math.floor(Math.random() * 100),
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async values => {
        await createUser(values);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {renderFieldsContainer({
              handleChange: handleChange,
              handleBlur: handleBlur,
              errors: errors,
              touched: touched,
              handleSubmit: handleSubmit,
              values: values,
            })}
          </ScrollView>
          {renderBottomContainer()}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Signup;
