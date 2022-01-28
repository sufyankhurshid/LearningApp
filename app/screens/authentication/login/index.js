import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
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
import {AppStyles, MetricsMod} from '../../../themes';
import {LoginSchema} from './schema';
import {useDispatch, useSelector} from 'react-redux';
import {delay} from '../../../utils/customUtils';
import {blockUser} from '../../../redux/Action/user';
import {printLogs} from '../../../utils/logUtils';

function Login(props) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.users);
  const blockUsersData = useSelector(state => state?.user?.blockUsers);
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(0);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [previousValue, setPreviousValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (loginFailed > 4) {
      setCurrentValue('');
      setPreviousValue('');
      setLoginFailed(0);
      Alert.alert('Error', 'Your account has been blocked...');
    }
  }, [loginFailed]);

  const onFocusField = name => {
    name?.current?.focus();
  };

  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
    setFieldTouched,
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
            onBlur={() => setFieldTouched('email')}
            errors={errors?.email}
            touched={touched?.email}
            ref={emailRef}
            returnKeyLabel={'next'}
            returnKeyType={'next'}
            onSubmitEditing={() => onFocusField(passRef)}
          />
          <CustomTextInput
            placeholder={'Password'}
            value={values?.password}
            onChangeText={handleChange('password')}
            secureTextEntry
            onBlur={() => setFieldTouched('password')}
            errors={errors?.password}
            touched={touched?.password}
            ref={passRef}
            returnKeyLabel={'done'}
            returnKeyType={'done'}
            onSubmitEditing={handleSubmit}
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

  const blockUsers = values => {
    dispatch(blockUser({email: values?.userEmail, block: true}));
    Alert.alert('Error', 'Your email account has been blocked...!');
  };

  printLogs({previousValue, currentValue, loginFailed});

  const login = values => {
    const {userEmail} = values;
    setPreviousValue(userEmail);
    setCurrentValue(userEmail);
    if (previousValue === currentValue) {
      setLoginFailed(loginFailed => loginFailed + 1);
    } else if (previousValue !== currentValue) {
      currentValue('');
      previousValue('');
      setLoginFailed(0);
    }

    // if (loginFailed > 4) {
    //   printLogs({loginStatus});
    //   printLogs({previousValue, currentValue});
    //   // blockUsers(values);
    // } else {
    //   for (const block of blockUsersData) {
    //     if (values?.userEmail === block?.email) {
    //       Alert.alert('Error', 'Your email account has been blocked...!');
    //       break;
    //     } else {
    //       for (const user of userData) {
    //         if (
    //           user?.userEmail === values?.userEmail &&
    //           user?.password === values?.password
    //         ) {
    //           return (
    //             dispatch(isLoggedIn(true)),
    //             dispatch(loginStatus(user)),
    //             showToast({type: 'success', text: 'Login Successful...👋'})
    //           );
    //         }
    //       }
    //     }
    //   }
    //   setLoginFailed(loginFailed => loginFailed + 1);
    //   showToast({type: 'error', text: 'Login Failed...'});
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
        let {email, ...val} = values;
        const userEmail = email.toLowerCase();
        let newValues;
        newValues = {...val, userEmail};
        setLoading(true);
        await delay(2000);
        login(newValues);
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
        setFieldTouched,
      }) => (
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
              setFieldTouched: setFieldTouched,
            })}
          </ScrollView>
          {renderBottomContainer()}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Login;
