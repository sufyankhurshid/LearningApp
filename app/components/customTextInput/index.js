import React from "react";
import PropTypes from "prop-types";
import {TextInput} from "react-native";
import styles from "./styles";

function CustomTextInput({placeholder, onChange, secureTextEntry, inputTextStyle, placeholderTextColor}) {
    return (
        <TextInput
            style={[styles.input, inputTextStyle]}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default CustomTextInput

CustomTextInput.propTypes = {
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    inputTextStyle: PropTypes.object,
    placeholderTextColor: PropTypes.string
};

CustomTextInput.defaultProps = {
    placeholder: '',
    errorMessage: '',
    placeholderTextColor: '',
    onChange: () => {
    },
    secureTextEntry: false,
    inputTextStyle: {}
};
