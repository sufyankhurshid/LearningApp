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
import Images from '../../themes/Images';
import {Formik} from 'formik';
import {AppStyles, MetricsMod} from '../../themes';
import CustomButton from '../../components/CustomButton';
import {CHOOSE_CAMERA_LIST, ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../../components/VectorIconComponent';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import {ShowDetailPostSchema} from './schema';
import {delay, getParams} from '../../utils/customUtils';
import CustomTextInput from '../../components/customTextInput';
import {useDispatch} from 'react-redux';
import {updateUserPost} from '../../redux/Action/user';
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../components/customModal';
import Toast from 'react-native-toast-message';

function ShowDetailsPost(props) {
  const {item} = getParams(props);
  const {id, userId, title, body, images} = item?.item || {};
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [profileImage, setProfileImage] = useState(images || null);
  const [openModal, setOpenModal] = useState(false);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const onUpdatePost = async values => {
    const images = profileImage || null;
    let newValues;
    if (images === null) {
      newValues = {userId, id, ...values};
    } else {
      newValues = {userId, id, ...values, images};
    }
    dispatch(updateUserPost(newValues));
    Toast.show({
      type: 'success',
      text1: 'Post updated successfully...👋',
    });
    onPressBack();
  };

  const onPressBack = () => {
    navigateToScreen(props, MAIN_SCREEN.HOME);
    setProfileImage(null);
  };

  const onFocusField = name => {
    name?.current?.focus();
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
    setProfileImage(images);
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
    setProfileImage(images);
    setOpenModal(false);
  };

  const onPressItem = key => {
    if (key === 'takePhoto') {
      takePhotoFromCamera();
    } else {
      takePhotoFromLibrary();
    }
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
        <TouchableOpacity
          style={styles.imageView}
          activeOpacity={0.3}
          onPress={toggleModel}>
          {profileImage !== null &&
            profileImage?.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    key={index}
                    source={{uri: item?.uri}}
                    style={styles.userImage}
                  />
                </View>
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
          <Image source={Images.rightOrange} style={styles.orangeStyle} />
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

export default ShowDetailsPost;
