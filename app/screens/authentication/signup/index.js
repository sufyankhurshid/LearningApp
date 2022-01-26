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
import images from '../../../themes/Images';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/CustomButton';
import {AppStyles, Images, MetricsMod} from '../../../themes';
import {navigateToScreen} from '../../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../../constants/screens';
import * as ImagePicker from 'react-native-image-crop-picker';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {SignupSchema} from './schema';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-datepicker';
import {delay} from '../../../utils/customUtils';
import {RadioButton} from 'react-native-paper';
import {CHOOSE_CAMERA_LIST, ICON_TYPES} from '../../../constants/constant';
import VectorIconComponent from '../../../components/VectorIconComponent';
import {resetError, users} from '../../../redux/Action/user';
import CustomModal from '../../../components/customModal';
import {isEmpty} from 'lodash';

function Signup(props) {
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);
  const error = useSelector(state => state?.user?.error) || '';
  const usersData = useSelector(state => state?.user?.users) || [];

  const [openModal, setOpenModal] = useState(false);
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    dispatch(resetError(''));
  }, []);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const renderBottomContainer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.dontHave}>Already have an account? </Text>
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

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.LOGIN);
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
        <VectorIconComponent
          style={styles.icon}
          name={'arrow-back'}
          size={MetricsMod.forty}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.IonIcons}
          onPress={onPressBack}
        />

        <Image source={images.rightOrange} style={styles.orangeStyle} />

        <Text style={styles.createAccount}>Create {'\n'}Account</Text>

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

  const onPressItem = key => {
    if (key === 'takePhoto') {
      takePhotoFromCamera();
    } else {
      takePhotoFromLibrary();
    }
  };

  const createUser = async values => {
    await delay(2000);
    dispatch(users(values));
    // navigateToScreen(props, MAIN_SCREEN.LOGIN);
  };

  const initialValues = {
    image: Images.addImage,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values, {resetForm}) => {
        let {confirmPassword, image, phoneNumber, email, ...val} = values;
        const userEmail = email.toLowerCase();
        const profile = profileImage.uri ?? '';
        const phonenumber = phoneNumber.replace(/[^\d]/g, '');
        let newValues;
        if (isEmpty(profile)) {
          newValues = {...val, userEmail, phonenumber};
        } else {
          newValues = {...val, profile, userEmail, phonenumber};
        }
        setLoading(true);
        await createUser(newValues);
        setLoading(false);
        resetForm(initialValues);
        setProfileImage(Images.addImage);
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
          {renderBottomContainer()}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Signup;
