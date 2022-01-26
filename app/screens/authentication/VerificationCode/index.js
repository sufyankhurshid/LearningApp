import React, {useState} from 'react';
import {Alert, Image, StatusBar, Text, View} from 'react-native';

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
  printLogs({recoveryData});
  printLogs({userData});

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
        />

        <CustomTextInput
          placeholder={'Code'}
          onChangeText={handleChange('code')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('code')}
          errors={errors?.code}
          touched={touched?.code}
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

  printLogs({recovery: recoverEmailAndCode});

  const verifyCode = values => {
    recoverEmailAndCode.map(recovery => {
      if (
        recovery?.email === values?.email &&
        recovery?.code === values?.code
      ) {
        userData.map(user => {
          if (user?.email === recovery?.email) {
            Alert.alert('Success', `Your password is : ${user?.password}`);
          }
        });
      }
    });
  };

  const initialValues = {
    email: '',
    code: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VerificationSchema}
      onSubmit={async (values, resetForm) => {
        setLoading(true);
        await delay(2000);
        verifyCode(values);
        setLoading(false);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default VerificationCode;
