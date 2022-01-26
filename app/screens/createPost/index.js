import React, {useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import images from '../../themes/Images';
import {Formik} from 'formik';
import {delay} from '../../utils/customUtils';
import CustomTextInput from '../../components/customTextInput';
import {AppStyles, MetricsMod} from '../../themes';
import CustomButton from '../../components/CustomButton';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import {CreatePostSchema} from './schema';

function CreatePost(props) {
  const [loading, setLoading] = useState(false);

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.HOME);
  };

  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
  }) => {
    return (
      <View style={styles.textInput}>
        <CustomTextInput
          placeholder={'Title'}
          onChangeText={handleChange('title')}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('title')}
          errors={errors?.title}
          touched={touched?.title}
        />
        <CustomTextInput
          placeholder={'Body'}
          onChangeText={handleChange('body')}
          numberOfLines={5}
          multiline
          inputTextStyle={styles.multilineTextInput}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('body')}
          errors={errors?.body}
          touched={touched?.body}
        />
        <CustomButton
          loadingColor={AppStyles.colorSet.bgOrange}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'Next'}
          type="submit"
          onPress={handleSubmit}
          loading={loading}
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
      onSubmit={async (values, resetForm) => {
        setLoading(true);
        await delay(2000);
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
            handleSubmit: handleSubmit,
          })}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default CreatePost;
