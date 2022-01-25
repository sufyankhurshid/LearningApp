import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

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
import {ForgetSchema} from './schema';

function ForgetPassword(props) {
  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.LOGIN);
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
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.description}>
          Provide your account's email for which you want to reset your
          password...
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
  }) => {
    return (
      <View style={styles.buttonContainer}>
        <CustomTextInput
          placeholder={'Email'}
          onChangeText={handleChange('email')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('email')}
          errors={errors?.email}
          touched={touched?.email}
        />

        <CustomButton
          loadingColor={AppStyles.colorSet.bgOrange}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'Next'}
          type="submit"
          onPress={handleSubmit}
        />
      </View>
    );
  };

  const initialValues = {
    email: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ForgetSchema}
      onSubmit={values => {}}>
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
          })}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default ForgetPassword;
