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
import {useSelector} from 'react-redux';
import {printLogs} from '../../utils/logUtils';
import {getParams} from '../../utils/customUtils';
import {useCustomFetch} from '../../hooks/useCustomFetch';
import LoadingComponent from '../../components/LoadingComponent';
import CustomTextInput from '../../components/customTextInput';

function ShowDetailsPost(props) {
  const {id} = getParams(props);
  printLogs({showPostDetails: id});

  const {response, error} = useCustomFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const {title, body} = response || {};
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const loginUser = useSelector(state => state?.user?.loginStatus);

  printLogs({response, title, body});
  printLogs({error});

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.HOME);
  };

  const onFocusField = name => {
    name?.current?.focus();
  };

  if (loading || error) {
    return (
      <LoadingComponent
        loading={loading}
        containerStyle={styles.emptyContainer}
      />
    );
  }

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
        <Text style={styles.title}>ID</Text>
        <CustomTextInput
          onChangeText={handleChange('id')}
          value={values?.id}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          onBlur={handleBlur('title')}
          editable={false}
          selectTextOnFocus={false}
          errors={errors?.id}
          touched={touched?.id}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
        />
        <Text style={styles.title}>Title</Text>
        <CustomTextInput
          onChangeText={handleChange('title')}
          value={values?.title || title}
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
        <Text style={styles.title}>Body</Text>
        <CustomTextInput
          value={values?.body || body}
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
      </View>
    );
  };

  const initialValues = {
    id: id.toString(),
    title: '' || title,
    body: '' || body,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ShowDetailPostSchema}
      onSubmit={async (values, {resetForm}) => {}}>
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
          <CustomButton
            loadingColor={AppStyles.colorSet.bgGreen}
            buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
            title={'Update'}
            type="submit"
            onPress={handleSubmit}
            loading={loading}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default ShowDetailsPost;
