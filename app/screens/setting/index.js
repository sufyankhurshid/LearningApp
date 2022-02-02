import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';

import styles from './styles';
import images from '../../themes/Images';
import CustomTextInput from '../../components/customTextInput';
import CustomButton from '../../components/CustomButton';
import {AppStyles, Images, MetricsMod} from '../../themes';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import * as ImagePicker from 'react-native-image-crop-picker';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-datepicker';
import {delay} from '../../utils/customUtils';
import {RadioButton} from 'react-native-paper';
import {CHOOSE_CAMERA_LIST, ICON_TYPES} from '../../constants/constant';
import {updateLoginStatus, updateUserProfile} from '../../redux/Action/user';
import CustomModal from '../../components/customModal';
import {isEmpty} from 'lodash';
import Toast from 'react-native-toast-message';
import {SettingsSchema} from './schema';
import VectorIconComponent from '../../components/VectorIconComponent';
import {printLogs} from '../../utils/logUtils';

function Setting(props) {
  const dispatch = useDispatch();
  const error = useSelector(state => state?.user?.error) || '';
  const loginUser = useSelector(state => state?.user?.loginStatus);
  const userData = useSelector(state => state?.user?.users) || [];
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [profileImage, setProfileImage] = useState({
    uri: loginUser?.profile,
  });
  const [user, setUser] = useState({});
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    for (const user of userData) {
      if (user?.id === loginUser?.id) {
        printLogs({user});
        setUser(user);
        break;
      }
    }
  }, []);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const takePhotoFromLibrary = async () => {
    const image = await ImagePicker.openPicker({
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
    });
    setProfileImage({uri: image?.path});
    setOpenModal(false);
  };

  const takePhotoFromCamera = async () => {
    const image = await ImagePicker.openCamera({
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
    });
    setProfileImage({uri: image?.path});
    setOpenModal(false);
  };

  const onFocusField = name => {
    name?.current?.focus();
  };

  const keyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const onIconPress = () => {
    navigateToScreen(props, MAIN_SCREEN.DELETE_ACCOUNT);
  };

  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
    setFieldValue,
    setFieldTouched,
  }) => {
    return (
      <View style={styles.textInput}>
        <Image source={images.rightOrange} style={styles.orangeStyle} />
        <Text style={styles.createAccount}>Settings</Text>
        <VectorIconComponent
          style={styles.logout}
          name={'delete'}
          size={MetricsMod.thirtyFive}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.AntDesign}
          onPress={onIconPress}
        />

        <TouchableOpacity
          style={styles.imageView}
          activeOpacity={0.3}
          onPress={toggleModel}>
          <Image
            source={profileImage ? profileImage : Images.addImage}
            style={styles.userImage}
          />
        </TouchableOpacity>

        {!isEmpty(error) ? (
          <Text style={styles.errorExist}>{error}</Text>
        ) : null}

        <CustomTextInput
          placeholder={'First name'}
          onChangeText={handleChange('firstname')}
          value={values?.firstname}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.firstname}
          touched={touched?.firstname}
          onBlur={handleBlur('firstname')}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          onSubmitEditing={() => onFocusField(lastnameRef)}
        />

        <CustomTextInput
          placeholder={'Last name'}
          onChangeText={handleChange('lastname')}
          value={values?.lastname}
          ref={lastnameRef}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.lastname}
          touched={touched?.lastname}
          handleBlur={handleBlur('lastname')}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          onSubmitEditing={() => onFocusField(emailRef)}
        />

        <CustomTextInput
          placeholder={'Email'}
          value={values?.email}
          ref={emailRef}
          onChangeText={handleChange('email')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.email}
          touched={touched?.email}
          handleBlur={handleBlur('email')}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          onSubmitEditing={() => onFocusField(passwordRef)}
        />

        <CustomTextInput
          placeholder={'Password'}
          value={values?.password}
          onChangeText={handleChange('password')}
          secureTextEntry
          ref={passwordRef}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.password}
          touched={touched?.password}
          handleBlur={handleBlur('password')}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          onSubmitEditing={() => onFocusField(confirmRef)}
        />

        <CustomTextInput
          placeholder={'Confirm password'}
          value={values?.confirmPassword}
          ref={confirmRef}
          onChangeText={handleChange('confirmPassword')}
          secureTextEntry
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          errors={errors?.confirmPassword}
          touched={touched?.confirmPassword}
          handleBlur={handleBlur('confirmPassword')}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          onSubmitEditing={() => onFocusField(phoneRef)}
        />

        <MaskInput
          style={styles.input}
          value={values?.phoneNumber}
          ref={phoneRef}
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
          onSubmitEditing={keyboardDismiss}
        />

        {Boolean(errors?.phoneNumber) && Boolean(touched?.phoneNumber) ? (
          <Text style={styles.error}>{errors?.phoneNumber}</Text>
        ) : null}

        <DatePicker
          style={styles.datePicker}
          date={values?.dateOfBirth}
          mode="date"
          placeholder="Select Date of birth"
          format="YYYY-MM-DD"
          maxDate={new Date()}
          // minDate="1960-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            textColor: AppStyles.colorSet.white,
          }}
          onDateChange={handleChange('dateOfBirth')}
        />

        {Boolean(errors?.dateOfBirth) && Boolean(touched?.dateOfBirth) ? (
          <Text style={styles.error}>{errors?.dateOfBirth}</Text>
        ) : null}

        <RadioButton.Group
          onValueChange={handleChange('gender')}
          value={values?.gender}>
          <View style={styles.radio}>
            <View style={styles.radioContainer}>
              <RadioButton value="m" />
              <Text style={styles.title}>Male</Text>
            </View>
            <View style={styles.radioContainer}>
              <RadioButton value="f" />
              <Text style={styles.title}>Female</Text>
            </View>
          </View>
        </RadioButton.Group>

        {Boolean(errors?.gender) && Boolean(touched?.gender) ? (
          <Text style={styles.errorGender}>{errors?.gender}</Text>
        ) : null}

        <CustomButton
          loadingColor={AppStyles.colorSet.bgGreen}
          title={'UPDATE'}
          buttonStyle={{
            backgroundColor: AppStyles.colorSet.bgOrange,
          }}
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    );
  };

  const onPressItem = key => {
    if (key === 'takePhoto') {
      takePhotoFromCamera();
    } else {
      takePhotoFromLibrary();
    }
  };

  const updateUser = async values => {
    const newValues = {
      id: loginUser?.id,
      ...values,
      userCode: user?.userCode,
    };
    await delay(2000);
    dispatch(updateUserProfile(newValues));
    dispatch(updateLoginStatus(newValues));
    Toast.show({
      type: 'success',
      text1: 'Account created successfully...👋',
    });
  };

  const initialValues = {
    image: Images.addImage || loginUser?.profile,
    firstname: '' || loginUser?.firstname,
    lastname: '' || loginUser?.lastname,
    email: '' || loginUser?.userEmail,
    password: '' || loginUser?.password,
    confirmPassword: '' || loginUser?.password,
    phoneNumber: '' || loginUser?.phonenumber,
    dateOfBirth: '' || loginUser?.dateOfBirth,
    gender: '' || loginUser?.gender,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingsSchema}
      onSubmit={async (values, {resetForm}) => {
        let {confirmPassword, image, phoneNumber, email, ...val} = values;
        const userEmail = email.toLowerCase();
        const profile = profileImage.uri ?? '';
        const phonenumber = phoneNumber.replace(/[^\d]/g, '');
        let newValues;
        if (isEmpty(profile)) {
          newValues = {...val, userEmail, phonenumber};
        } else {
          newValues = {...val, userEmail, profile, phonenumber};
        }
        setLoading(true);
        await updateUser(newValues);
        setLoading(false);
        resetForm(initialValues);
      }}>
      {({
        handleChange,
        handleBlur,
        errors,
        touched,
        handleSubmit,
        values,
        setFieldValue,
        setFieldTouched,
      }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {renderFieldsContainer({
              handleChange: handleChange,
              handleBlur: handleBlur,
              errors: errors,
              touched: touched,
              handleSubmit: handleSubmit,
              setFieldValue: setFieldValue,
              setFieldTouched: setFieldTouched,
              values: values,
            })}
            <CustomModal
              open={openModal}
              close={toggleModel}
              data={CHOOSE_CAMERA_LIST}
              onPress={onPressItem}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Setting;
