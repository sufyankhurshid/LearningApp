import React, {useEffect, useRef, useState} from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import {AppStyles, MetricsMod} from '../../themes';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import CustomTextInput from '../../components/customTextInput';
import CustomButton from '../../components/CustomButton';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Formik} from 'formik';
import images from '../../themes/Images';
import {DeleteAccountSchema} from './schema';
import {delay} from '../../utils/customUtils';
import {useDispatch, useSelector} from 'react-redux';
import {printLogs} from '../../utils/logUtils';
import {
  deleteUserAccount,
  isLoggedIn,
  isSupportScreen,
} from '../../redux/Action/user';
import Toast from 'react-native-toast-message';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';

function DeleteAccount(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const loginUser = useSelector(state => state?.user?.loginStatus);
  const codeRef = useRef(null);
  const [codeFailed, setCodeFailed] = useState(0);

  useEffect(() => {
    if (codeFailed > 4) {
      return (
        setCodeFailed(0),
        navigateToScreen(props, MAIN_SCREEN.SUPPORT),
        dispatch(isSupportScreen(true))
      );
    }
  }, [codeFailed]);

  const renderTextContainer = () => {
    return (
      <View style={styles.textInput}>
        <VectorIconComponent
          name={'user-lock'}
          size={MetricsMod.eighty}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.FontAwesome5}
        />
        <Text style={styles.title}>Delete Account</Text>
        <Text style={styles.description}>
          Enter your four digit Code, to delete this account...
        </Text>
      </View>
    );
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
          maxLength={4}
          keyboardType={'numeric'}
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

  printLogs({codeFailed});
  const verifyCode = values => {
    if (loginUser?.userCode === values?.code) {
      return (
        setCodeFailed(0),
        dispatch(deleteUserAccount(loginUser?.id)),
        dispatch(isLoggedIn(false)),
        Toast.show({
          type: 'success',
          text1: 'Account deleted Successfully...👋',
        })
      );
    }
    setCodeFailed(codeFailed => codeFailed + 1);
    Toast.show({
      type: 'error',
      text1: 'Invalid code...',
    });
  };

  const initialValues = {
    code: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={DeleteAccountSchema}
      onSubmit={async (values, {resetForm}) => {
        setLoading(true);
        await delay(2000);
        verifyCode(values);
        setLoading(false);
        resetForm(initialValues);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <StatusBar hidden />
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

export default DeleteAccount;
