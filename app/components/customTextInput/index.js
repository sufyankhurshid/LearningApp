import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput} from 'react-native';
import styles from './styles';

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
    numberOfLines,
    multiline,
    returnKeyLabel,
    returnKeyType,
    onfocus,
    selectTextOnFocus,
    editable,
    keyboardType,
    maxLength,
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
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        maxLength={maxLength}
        onFocus={onfocus}
        keyboardType={keyboardType}
      />
      {Boolean(errors) && Boolean(touched) ? (
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
  multiline: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  placeholder: '',
  errorMessage: '',
  onChangeText: () => {},
  secureTextEntry: false,
  inputTextStyle: {},
  autoFocus: false,
  multiline: false,
};
