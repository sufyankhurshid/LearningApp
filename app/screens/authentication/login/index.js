import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Formik} from 'formik';

import styles from './styles';
import images from '../../../themes/Images';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/CustomButton';
import {navigateToScreen} from '../../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../../constants/screens';
import {AppStyles, MetricsMod} from '../../../themes';
import {LoginSchema} from './schema';
import {useDispatch, useSelector} from 'react-redux';
import {delay, showToast} from '../../../utils/customUtils';
import {isLoggedIn, resetError} from '../../../redux/Action/user';

function Login(props) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.createUsers);
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(0);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    if (loginFailed > 4) {
      navigateToScreen(props, MAIN_SCREEN.SUPPORT);
      dispatch(isSupportScreen(true));
    }
  }, [loginFailed]);

  const onFocusField = name => {
    name?.current?.focus();
  };

  const keyboardDismiss = () => {
    Keyboard.dismiss();
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
      <>
        <Image source={images.orange} style={styles.orangeStyle} />
        <Image source={images.green} style={styles.greenStyle} />
        <Text style={styles.welcomeText}>Welcome Back</Text>

        <View style={styles.textInput}>
          <CustomTextInput
            placeholder={'Email'}
            value={values?.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            errors={errors?.email}
            touched={touched?.email}
            onSubmitEditing={() => onFocusField(passRef)}
          />
          <CustomTextInput
            placeholder={'Password'}
            value={values?.password}
            onChangeText={handleChange('password')}
            secureTextEntry
            onBlur={handleBlur('email')}
            errors={errors?.password}
            touched={touched?.password}
            ref={passRef}
            onSubmitEditing={keyboardDismiss}
          />
          <Text
            style={styles.forget}
            onPress={() => navigateToScreen(props, MAIN_SCREEN.FORGET)}>
            {' '}
            Forget password ?{' '}
          </Text>

          <CustomButton
            loadingColor={AppStyles.colorSet.bgOrange}
            buttonStyle={{marginTop: MetricsMod.baseMargin}}
            title={'SIGN IN'}
            type="submit"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
      </>
    );
  };

  const renderBottomContainer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.dontHave}>Don’t have an account? </Text>
        <Text
          style={styles.signUp}
          onPress={() => navigateToScreen(props, MAIN_SCREEN.SIGN_UP)}>
          SIGN UP{' '}
        </Text>
      </View>
    );
  };

  const login = values => {
    userData.map(user => {
      if (
        user?.email === values?.email &&
        user?.password === values?.password
      ) {
        dispatch(isLoggedIn(true));
        dispatch(resetError(''));
        // showToast({type: 'success', text: 'Login Successful...👋'});
        navigateToScreen(props, MAIN_SCREEN.HOME);
      }
    });
    showToast({type: 'error', text: 'Login Failed...'});
    setLoginFailed(loginFailed => loginFailed + 1);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values, {resetForm}) => {
        setLoading(true);
        await delay(2000);
        login(values);
        setLoading(false);
        resetForm(initialValues);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <StatusBar hidden />
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

export default Login;
