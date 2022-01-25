import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import VectorIconComponent from '../VectorIconComponent';

function CustomHeader(props) {
  const {
    isLeftIcon,
    leftIconType,
    leftIconName,
    isRightIcon,
    rightIconType,
    rightIconName,
    title,
    headerTitleStyle,
    headerContainerStyle,
    leftIconStyle,
    rightIconStyle,
    rightIconOnPress,
    leftIconOnPress,
  } = props ?? {};
  return (
    <SafeAreaView>
      <View style={[styles.header, headerContainerStyle]}>
        <TouchableOpacity onPress={leftIconOnPress}>
          {isLeftIcon && (
            <VectorIconComponent
              name={leftIconName}
              size={MetricsMod.section}
              color={AppStyles.colorSet.white}
              style={[styles.iconWhite, leftIconStyle]}
              type={leftIconType}
            />
          )}
          {!isLeftIcon && (
            <View
              style={{
                width: MetricsMod.doubleBaseMargin,
              }}
            />
          )}
        </TouchableOpacity>
        {title && (
          <View>
            <Text style={[styles.headerText, headerTitleStyle]}>{title}</Text>
          </View>
        )}
        <View>
          <TouchableOpacity onPress={rightIconOnPress}>
            {isRightIcon && (
              <VectorIconComponent
                name={rightIconName}
                size={MetricsMod.forty}
                color={AppStyles.colorSet.white}
                style={[styles.iconWhite, rightIconStyle]}
                type={rightIconType}
              />
            )}
            {!isRightIcon && (
              <View
                style={{
                  width: MetricsMod.doubleBaseMargin,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CustomHeader;

CustomHeader.propTypes = {
  isLeftIcon: PropTypes.bool,
  leftIconName: PropTypes.string,
  isRightIcon: PropTypes.bool,
  rightIconName: PropTypes.string,
  rightIconOnPress: PropTypes.func,
  leftIconOnPress: PropTypes.func,
};

CustomHeader.defaultProps = {
  isLeftIcon: false,
  iconName: '',
  leftIconName: '',
  isRightIcon: false,
  rightIconName: '',
  rightIconOnPress: () => {},
  leftIconOnPress: () => {},
};
