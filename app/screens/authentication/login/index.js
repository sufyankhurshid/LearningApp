import React from 'react';
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
import {useSelector} from 'react-redux';

function Login(props) {
  const userData = useSelector(state => state?.user?.userDetails);
  const {email, password} = userData || {};
  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
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

          <CustomButton
            buttonStyle={{marginTop: MetricsMod.baseMargin}}
            title={'SIGN IN'}
            type="submit"
            onPress={handleSubmit}
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

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={values => {
        if (email === values?.email && password === values?.password) {
          alert('login successfully');
        } else {
          alert('login failed');
        }
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
            })}
          </ScrollView>
          {renderBottomContainer()}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Login;
