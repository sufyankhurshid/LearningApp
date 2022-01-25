import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import CustomListItem from '../CustomListItem';
import CustomHeader from '../CustomHeader';
import {ICON_TYPES} from '../../constants/constant';

function CustomModal({open, close, data, onPress}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={close}
      onBackdropPress={close}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomHeader
            title={'Select Image'}
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
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;
