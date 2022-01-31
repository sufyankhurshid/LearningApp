import React, {useRef, useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import images from '../../themes/Images';
import {Formik} from 'formik';
import {AppStyles, MetricsMod} from '../../themes';
import CustomButton from '../../components/CustomButton';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import {ShowDetailPostSchema} from './schema';
import {printLogs} from '../../utils/logUtils';
import {delay, getParams} from '../../utils/customUtils';
import CustomTextInput from '../../components/customTextInput';
import {useDispatch} from 'react-redux';
import {updateUserPost} from '../../redux/Action/user';

function ShowDetailsPost(props) {
  const {item} = getParams(props);
  const {id, userId, title, body} = item?.item || {};
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const onUpdatePost = async values => {
    const newValues = {userId, id, ...values};
    dispatch(updateUserPost(newValues));
    onPressBack();
  };

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.HOME);
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
      <View style={styles.textInput}>
        <Text style={styles.title}>{`ID: ${id}`}</Text>
        <CustomTextInput
          placeholder={'Title'}
          placeholderTextColor={AppStyles.colorSet.white}
          onChangeText={handleChange('title')}
          value={values?.title}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          autoFocus
          onBlur={handleBlur('title')}
          errors={errors?.title}
          touched={touched?.title}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          ref={titleRef}
          onSubmitEditing={() => onFocusField(bodyRef)}
        />
        <CustomTextInput
          placeholder={'Body'}
          placeholderTextColor={AppStyles.colorSet.white}
          value={values?.body}
          onChangeText={handleChange('body')}
          numberOfLines={10}
          multiline
          inputTextStyle={styles.multilineTextInput}
          onBlur={handleBlur('body')}
          errors={errors?.body}
          touched={touched?.body}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          ref={bodyRef}
          onSubmitEditing={handleSubmit}
        />
        <CustomButton
          loadingColor={AppStyles.colorSet.bgGreen}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'Update'}
          type="submit"
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    );
  };

  const initialValues = {
    title: title ? title : '',
    body: body ? body : '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ShowDetailPostSchema}
      onSubmit={async (values, {resetForm}) => {
        printLogs({values});
        setLoading(true);
        await delay(2000);
        await onUpdatePost(values);
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
          <Text style={styles.createAccount}>Show Post Details</Text>
          <Image source={images.rightOrange} style={styles.orangeStyle} />
          <Image source={images.rightOrange} style={styles.orangeStyle} />
          {renderFieldsContainer({
            handleChange: handleChange,
            handleBlur: handleBlur,
            errors: errors,
            touched: touched,
            values: values,
            handleSubmit: handleSubmit,
          })}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default ShowDetailsPost;
