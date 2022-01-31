import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from '../components/CustomListingComponent/styles';
import {AppStyles, MetricsMod} from '../themes';
import VectorIconComponent from '../components/VectorIconComponent';
import React from 'react';

export const ICON_TYPES = {
  AntDesign: 'AntDesign',
  IonIcons: 'Ionicons',
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  SimpleLineIcons: 'SimpleLineIcons',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Entypo: 'Entypo',
  EvilIcons: 'EvilIcons',
  Octicons: 'Octicons',
  Feather: 'Feather',
  Foundation: 'Foundation',
};

export const GENDER_LIST = [
  {
    id: 1,
    gender: 'Male',
  },
  {
    id: 2,
    gender: 'Female',
  },
];

export const ACTION = [
  {
    text: 'Create Post',
    icon: (
      <VectorIconComponent
        style={styles.icon}
        name={'create-outline'}
        size={MetricsMod.twentyThree}
        color={AppStyles.colorSet.white}
        type={ICON_TYPES.IonIcons}
      />
    ),
    name: 'createPost',
    position: 1,
  },
];

export const CHOOSE_CAMERA_LIST = [
  {
    key: 'takePhoto',
    title: 'Take Photo',
    iconType: ICON_TYPES.Entypo,
    icon: 'camera',
  },
  {
    key: 'chooseFromLibrary',
    title: 'Choose from library',
    iconType: ICON_TYPES.FontAwesome,
    icon: 'photo',
  },
];

export const BOTTOM_LIST = [
  {
    key: 'delete',
    title: 'Delete',
    iconType: ICON_TYPES.FontAwesome,
    icon: 'photo',
  },
];
