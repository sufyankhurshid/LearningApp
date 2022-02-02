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
import {UserCodeSchema} from './schema';
import {delay} from '../../utils/customUtils';
import {useDispatch, useSelector} from 'react-redux';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
import {addLoginStatusCode, addUserCode} from '../../redux/Action/user';

function UserCode(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state?.user?.users);
  const loginUser = useSelector(state => state?.user?.loginStatus);
  const codeRef = useRef(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const renderTextContainer = () => {
    return (
      <View style={styles.textInput}>
        <VectorIconComponent
          name={'user-lock'}
          size={MetricsMod.eighty}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.FontAwesome5}
        />
        <Text style={styles.title}>User Code</Text>
        <Text style={styles.description}>
          Enter your four-digit code whenever you want to delete your account,
          This code is required to delete your account...
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
          keyboardType={'numeric'}
          ref={codeRef}
          onSubmitEditing={handleSubmit}
          maxLength={4}
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

  const verifyCode = values => {
    const newValues = {id: loginUser?.id, ...values};
    for (const user of userData) {
      if (user?.id === loginUser?.id) {
        dispatch(addUserCode(newValues));
        dispatch(addLoginStatusCode(newValues));
      }
    }
  };

  const initialValues = {
    code: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserCodeSchema}
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

export default UserCode;
