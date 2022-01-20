import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../VectorIconComponent';
import {ICON_TYPES} from '../../constants/constant';
import styles from './styles';

function RadioButton(props) {
  const {data, selectedItem, size, color, onPress} = props;

  const optionSelected = item => {
    const check = item.gender === selectedItem.gender;
    return check ? 'radiobox-marked' : 'radiobox-blank';
  };

  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => onPress(item)}
            activeOpacity={0.9}>
            <Text style={styles.title}>{item.gender}</Text>
            <VectorIconComponent
              name={optionSelected(item)}
              size={size}
              color={color}
              type={ICON_TYPES.MaterialCommunityIcons}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default RadioButton;

RadioButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
  selectedItem: PropTypes.object,
  data: PropTypes.array,
};

RadioButton.defaultProps = {
  size: MetricsMod.section,
  color: AppStyles.colorSet.white,
  title: '',
  selectedItem: {},
  data: [],
};
