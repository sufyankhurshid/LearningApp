import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function CustomButton(props) {
    const {title, onPress, disabled, buttonStyle} = props || {};
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.button, buttonStyle]}
                activeOpacity={0.9}
                disabled={disabled}
                onPress={onPress}>
                <Text style={styles.textButtonVerify}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;

CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    buttonStyle: PropTypes.object
};

CustomButton.defaultProps = {
    title: '',
    onPress: () => {
    },
    disabled: false,
    buttonStyle: {}
};
