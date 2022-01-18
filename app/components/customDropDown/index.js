import React, {useState} from "react";
import {View} from "react-native";
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';

function CustomDropDown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
    ]);
    return (
        <View style={styles.container}>
            <DropDownPicker
                placeholder={'Gender'}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    )
}

export default CustomDropDown
