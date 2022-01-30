import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';

import {styles} from './styles';
import CustomListItem from '../CustomListItem';
import {ICON_TYPES} from '../../constants/constant';
import CustomHeader from '../CustomHeader';

const CustomBottomSheet = props => {
  const {open, close, onPress, data} = props || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <BottomSheet
          visible={open}
          onBackButtonPress={close}
          onBackdropPress={close}>
          <CustomHeader
            title={'Post Options'}
            isRightIcon
            rightIconType={ICON_TYPES.Entypo}
            rightIconName={'cross'}
            rightIconOnPress={close}
          />
          {data.map(item => {
            const {title, key, iconType, icon} = item || {};
            return (
              <CustomListItem
                text={title}
                key={key}
                isLeftIcon
                iconName={icon}
                iconType={iconType}
                onPress={() => onPress(key)}
              />
            );
          })}
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomSheet;
