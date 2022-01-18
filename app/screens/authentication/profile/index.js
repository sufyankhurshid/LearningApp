import React from "react"
import {Image, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import images from "../../../themes/Images";
import CustomTextInput from "../../../components/customTextInput";
import {AppStyles} from "../../../themes";
import CustomDropDown from "../../../components/customDropDown";

function Profile() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const renderTopContainer = () => (
        <View style={styles.topContainer}>
            <Image source={images.rightOrange} style={styles.orangeStyle}/>
            <Text style={styles.createAccount}>Profile</Text>
        </View>
    )

    const renderMiddleContainer = () => {
        return (
            <View style={styles.textInput}>
                <View style={styles.imageView}>
                    <Image style={styles.userImage}/>
                </View>

                <CustomTextInput placeholder={'Full name'} onChange={setEmail}
                                 inputTextStyle={{
                                     color: AppStyles.colorSet.white,
                                 }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomTextInput placeholder={'Last name'} onChange={setEmail}
                                 inputTextStyle={{
                                     color: AppStyles.colorSet.white,
                                 }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomDropDown/>
                {/*<CustomTextInput placeholder={'Gender'} onChange={setPassword} secureTextEntryinputTextStyle={{*/}
                {/*    color: AppStyles.colorSet.white,*/}
                {/*}}*/}
                {/*                 placeholderTextColor={AppStyles.colorSet.white}/>*/}
                {/*<CustomTextInput placeholder={'Date of birth'} onChange={setEmail}*/}
                {/*                 inputTextStyle={{*/}
                {/*                     color: AppStyles.colorSet.white,*/}
                {/*                 }}*/}
                {/*                 placeholderTextColor={AppStyles.colorSet.white}/>*/}
                {/*<CustomTextInput placeholder={'Number'} onChange={setEmail}*/}
                {/*                 inputTextStyle={{*/}
                {/*                     color: AppStyles.colorSet.white,*/}
                {/*                 }}*/}
                {/*                 placeholderTextColor={AppStyles.colorSet.white}/>*/}


                {/*<CustomButton title={'SAVE'} buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}/>*/}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderTopContainer()}
            {renderMiddleContainer()}
        </SafeAreaView>
    )
}

export default Profile
