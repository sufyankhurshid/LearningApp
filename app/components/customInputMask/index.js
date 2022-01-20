import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import MaskInput from 'react-native-mask-input/src/MaskInput';

import {boolean} from 'yup';
import {Text} from 'react-native';

function CustomInputMask(props) {
  const {
    onChange,
    value,
    placeholder,
    inputTextStyle,
    placeholderTextColor,
    mask,
    errors,
    touched,
    handleBlur,
  } = props || {};
  return (
    <>
      <MaskInput
        onChangeText={onChange}
        style={[styles.input, inputTextStyle]}
        onBlur={handleBlur}
        value={value}
        keyboardType={'numeric'}
        returnKeyType={'next'}
        returnKeyLabel={'next'}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        mask={mask}
      />
      {boolean(errors && touched) ? (
        <Text style={styles.error}>{errors}</Text>
      ) : null}
    </>
  );
}

export default CustomInputMask;

CustomInputMask.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputTextStyle: PropTypes.object,
};

CustomInputMask.defaultProps = {
  placeholder: '',
  onChange: () => {},
  inputTextStyle: {},
};
