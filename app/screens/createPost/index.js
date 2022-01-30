import React, {useRef, useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import images from '../../themes/Images';
import {Formik} from 'formik';
import CustomTextInput from '../../components/customTextInput';
import {AppStyles, MetricsMod} from '../../themes';
import CustomButton from '../../components/CustomButton';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import {CreatePostSchema} from './schema';
import {useSelector} from 'react-redux';
import {printLogs} from '../../utils/logUtils';
import {delay, showToast} from '../../utils/customUtils';

function CreatePost(props) {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const loginUser = useSelector(state => state?.user?.loginStatus);

  const onCreatePost = async (url, option) => {
    const res = await fetch(url, option);
    printLogs({res});
    if (res?.ok) {
      showToast('success', 'Post created successfully...');
    }
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
        <CustomTextInput
          placeholder={'Title'}
          onChangeText={handleChange('title')}
          value={values?.title}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
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
          value={values?.body}
          onChangeText={handleChange('body')}
          numberOfLines={5}
          multiline
          inputTextStyle={styles.multilineTextInput}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('body')}
          errors={errors?.body}
          touched={touched?.body}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          ref={bodyRef}
          onSubmitEditing={handleSubmit}
        />
      </View>
    );
  };

  const initialValues = {
    title: '',
    body: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreatePostSchema}
      onSubmit={async (values, {resetForm}) => {
        setLoading(true);
        await delay(2000);
        await onCreatePost('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: values?.title,
            body: values?.body,
            userId: loginUser?.id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        setLoading(false);
        resetForm(initialValues);
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
          <Text style={styles.createAccount}>Create Post</Text>
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
          <CustomButton
            loadingColor={AppStyles.colorSet.bgGreen}
            buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
            title={'Create'}
            type="submit"
            onPress={handleSubmit}
            loading={loading}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default CreatePost;
