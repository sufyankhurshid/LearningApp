import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import {boolean} from 'yup';

function CustomTextInput(props, ref) {
  const {
    placeholder,
    onChangeText,
    secureTextEntry,
    inputTextStyle,
    placeholderTextColor,
    onBlur,
    errors,
    touched,
    value,
    onChange,
    onSubmitEditing,
    autoFocus,
  } = props || {};
  return (
    <>
      <TextInput
        style={[styles.input, inputTextStyle]}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        returnKeyType={'next'}
        returnKeyLabel={'next'}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
      />
      {boolean(errors && touched) ? (
        <Text style={styles.error}>{errors}</Text>
      ) : null}
    </>
  );
}

export default forwardRef(CustomTextInput);

CustomTextInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  inputTextStyle: PropTypes.object,
  autoFocus: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  placeholder: '',
  errorMessage: '',
  onChangeText: () => {},
  secureTextEntry: false,
  inputTextStyle: {},
  autoFocus: false,
};
