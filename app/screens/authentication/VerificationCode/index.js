import React, {useRef, useState} from 'react';
import {Alert, Image, ScrollView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import {AppStyles, MetricsMod} from '../../../themes';
import {navigateToScreen} from '../../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../../constants/screens';
import {ICON_TYPES} from '../../../constants/constant';
import VectorIconComponent from '../../../components/VectorIconComponent';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/CustomButton';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Formik} from 'formik';
import images from '../../../themes/Images';
import {VerificationSchema} from './schema';
import {delay} from '../../../utils/customUtils';
import {useSelector} from 'react-redux';
import {printLogs} from '../../../utils/logUtils';

function VerificationCode(props) {
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state?.user?.users);
  const recoveryData = useSelector(state => state?.user?.recoveries);
  const emailRef = useRef(null);
  const codeRef = useRef(null);

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.FORGET);
  };

  const renderTextContainer = () => {
    return (
      <View style={styles.textInput}>
        <VectorIconComponent
          name={'user-lock'}
          size={MetricsMod.eighty}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.FontAwesome5}
        />
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.description}>
          Enter the email address associated with your account and Enter Code...
        </Text>
      </View>
    );
  };

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
  }) => {
    return (
      <View style={styles.buttonContainer}>
        <CustomTextInput
          placeholder={'Email'}
          value={values?.email}
          onChangeText={handleChange('email')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('email')}
          errors={errors?.email}
          touched={touched?.email}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          ref={emailRef}
          onSubmitEditing={() => onFocusField(codeRef)}
        />

        <CustomTextInput
          placeholder={'Code'}
          onChangeText={handleChange('code')}
          value={values?.code}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('code')}
          errors={errors?.code}
          touched={touched?.code}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          ref={codeRef}
          onSubmitEditing={handleSubmit}
        />

        <CustomButton
          loadingColor={AppStyles.colorSet.bgGreen}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'Confirm'}
          type="submit"
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    );
  };

  const keysObject = Object.keys(recoveryData);
  const valuesObject = Object.values(recoveryData);

  const recoverEmailAndCode = keysObject.map((e, i) => {
    return {email: e, code: valuesObject[i]};
  });

  const verifyCode = values => {
    for (const recovery of recoverEmailAndCode) {
      if (
        recovery?.email === values?.userEmail &&
        recovery?.code === values?.code
      ) {
        userData.map(user => {
          if (user?.userEmail === recovery?.email) {
            Alert.alert('Success', `Your password is : ${user?.password}`, [
              {
                text: 'Cancel',
                onPress: () => printLogs('Cancel'),
              },
              {
                text: 'Ok',
                onPress: () => navigateToScreen(props, MAIN_SCREEN.LOGIN),
              },
            ]);
          }
        });
      }
    }
  };

  const initialValues = {
    email: '',
    code: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VerificationSchema}
      onSubmit={async (values, {resetForm}) => {
        let {email, ...val} = values;
        const userEmail = email.toLowerCase();
        let newValues;
        newValues = {...val, userEmail};
        setLoading(true);
        await delay(2000);
        verifyCode(newValues);
        setLoading(false);
        resetForm(initialValues);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <StatusBar hidden />
            <VectorIconComponent
              style={styles.icon}
              name={'arrow-back'}
              size={MetricsMod.forty}
              color={AppStyles.colorSet.white}
              type={ICON_TYPES.IonIcons}
              onPress={onPressBack}
            />
            <Image source={images.rightOrange} style={styles.orangeStyle} />
            {renderTextContainer()}
            {renderFieldsContainer({
              handleChange: handleChange,
              handleBlur: handleBlur,
              errors: errors,
              touched: touched,
              handleSubmit: handleSubmit,
              values: values,
            })}
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default VerificationCode;
