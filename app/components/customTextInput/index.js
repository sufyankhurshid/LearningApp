import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import {boolean} from 'yup';

function CustomTextInput({
  placeholder,
  onChange,
  secureTextEntry,
  inputTextStyle,
  placeholderTextColor,
  onBlur,
  errors,
  touched,
}) {
  return (
    <>
      <TextInput
        style={[styles.input, inputTextStyle]}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        returnKeyType={'next'}
        returnKeyLabel={'next'}
      />
      {boolean(errors && touched) ? (
        <Text style={styles.error}>{errors}</Text>
      ) : null}
    </>
  );
}

export default CustomTextInput;

CustomTextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  inputTextStyle: PropTypes.object,
};

CustomTextInput.defaultProps = {
  placeholder: '',
  errorMessage: '',
  onChange: () => {},
  secureTextEntry: false,
  inputTextStyle: {},
};
