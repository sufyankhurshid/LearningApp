import React, {useEffect, useState} from 'react';
import {
  Image,
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
import {MetricsMod} from '../../../themes';
import {LoginSchema} from './schema';
import {useDispatch, useSelector} from 'react-redux';
import {delay} from '../../../utils/customUtils';
import {
  isLoggedIn,
  isSupportScreen,
  resetError,
} from '../../../redux/Action/user';
import Toast from 'react-native-toast-message';

function Login(props) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.createUsers);
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(0);

  useEffect(() => {
    if (loginFailed > 4) {
      navigateToScreen(props, MAIN_SCREEN.SUPPORT);
      dispatch(isSupportScreen(true));
    }
  }, [loginFailed]);

  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    loginFailed,
  }) => {
    return (
      <>
        <Image source={images.orange} style={styles.orangeStyle} />
        <Image source={images.green} style={styles.greenStyle} />
        <Text style={styles.welcomeText}>Welcome Back</Text>

        <View style={styles.textInput}>
          <CustomTextInput
            placeholder={'Email'}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            errors={errors?.email}
            touched={touched?.email}
          />
          <CustomTextInput
            placeholder={'Password'}
            onChange={handleChange('password')}
            secureTextEntry
            onBlur={handleBlur('email')}
            errors={errors?.password}
            touched={touched?.password}
          />
          {loginFailed > 0 && (
            <Text style={styles.title}>{`Login failed = ${loginFailed}`}</Text>
          )}
          <CustomButton
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

  const showToast = ({type, text}) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

  const login = values => {
    userData.map(user => {
      if (
        user?.email === values?.email &&
        user?.password === values?.password
      ) {
        dispatch(isLoggedIn(true));
        dispatch(resetError(''));
        showToast({type: 'success', text: 'Login Successful... 👋'});
        navigateToScreen(props, MAIN_SCREEN.HOME);
      }
    });
    setLoginFailed(loginFailed + 1);
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={async values => {
        setLoading(true);
        await delay(2000);
        login(values);
        setLoading(false);
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
              login_failed: loginFailed,
            })}
          </ScrollView>
          {renderBottomContainer()}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Login;
