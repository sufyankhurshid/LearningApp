import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import images from '../../themes/Images';
import Images from '../../themes/Images';
import {Formik} from 'formik';
import CustomTextInput from '../../components/customTextInput';
import {AppStyles, MetricsMod} from '../../themes';
import CustomButton from '../../components/CustomButton';
import {CHOOSE_CAMERA_LIST, ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import {CreatePostSchema} from './schema';
import {useDispatch, useSelector} from 'react-redux';
import {delay} from '../../utils/customUtils';
import Toast from 'react-native-toast-message';
import CustomModal from '../../components/customModal';
import ImagePicker from 'react-native-image-crop-picker';
import {createUserPost} from '../../redux/Action/user';

function CreatePost(props) {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const loginUser = useSelector(state => state?.user?.loginStatus);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const onCreatePost = values => {
    const images = profileImage?.images || null;
    let newValues;
    if (images === null) {
      newValues = {userId: loginUser?.id, ...values};
    } else {
      newValues = {userId: loginUser?.id, ...values, images};
    }
    dispatch(createUserPost(newValues));
    Toast.show({
      type: 'success',
      text: 'Post created successfully...👋',
    });
  };

  const takePhotoFromLibrary = async () => {
    const image = await ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setProfileImage({images});
    setOpenModal(false);
  };

  const takePhotoFromCamera = async () => {
    const image = await ImagePicker.openCamera({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setProfileImage({images});
    setOpenModal(false);
  };

  const onPressItem = key => {
    if (key === 'takePhoto') {
      takePhotoFromCamera();
    } else {
      takePhotoFromLibrary();
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
        <TouchableOpacity
          style={styles.imageView}
          activeOpacity={0.3}
          onPress={toggleModel}>
          {profileImage?.images.map((item, index) => {
            return (
              <>
                <Image
                  key={index}
                  source={{uri: item?.uri}}
                  style={styles.userImage}
                />
              </>
            );
          })}
        </TouchableOpacity>
        {profileImage === null && (
          <TouchableOpacity
            style={styles.emptyImageView}
            activeOpacity={0.3}
            onPress={toggleModel}>
            <Image source={Images.plus} style={styles.emptyImage} />
          </TouchableOpacity>
        )}
        <CustomButton
          loadingColor={AppStyles.colorSet.bgGreen}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'Create'}
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
      onSubmit={async (values, {resetForm}) => {
        setLoading(true);
        await delay(2000);
        await onCreatePost(values);
        setLoading(false);
        resetForm(initialValues);
        setProfileImage(null);
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
          <CustomModal
            open={openModal}
            close={toggleModel}
            data={CHOOSE_CAMERA_LIST}
            onPress={onPressItem}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default CreatePost;
