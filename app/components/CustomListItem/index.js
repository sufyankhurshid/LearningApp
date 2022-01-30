import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RadioButton from '../RadioButton';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import VectorIconComponent from '../VectorIconComponent';

function CustomListItem(props) {
  const {
    isLeftIcon,
    iconType,
    iconName,
    text,
    isRadio,
    isActive,
    onPress,
    isToggle,
    containerStyle,
    textStyleContainer,
    iconColor,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={styles.innerContainer}>
        {isLeftIcon && (
          <VectorIconComponent
            name={iconName}
            size={MetricsMod.section}
            color={iconColor}
            type={iconType}
          />
        )}
        <Text style={[styles.textStyle, textStyleContainer]}>{text}</Text>
      </View>
      {isRadio && (
        <RadioButton
          isActive={isActive}
          size={MetricsMod.thirty}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
}

export default CustomListItem;

CustomListItem.propTypes = {
  isLeftIcon: PropTypes.bool,
  iconName: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool,
  isRadio: PropTypes.bool,
  isToggle: PropTypes.bool,
  iconColor: PropTypes.string,
};

CustomListItem.defaultProps = {
  isLeftIcon: false,
  iconName: '',
  text: '',
  isActive: false,
  isRadio: false,
  isToggle: false,
  iconColor: AppStyles.colorSet.blackX,
};
