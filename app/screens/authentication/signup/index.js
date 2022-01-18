import React from "react"
import {Image, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import images from "../../../themes/Images";
import CustomTextInput from "../../../components/customTextInput";
import CustomButton from "../../../components/CustomButton";
import {AppStyles} from "../../../themes";
import {navigateToScreen} from "../../../utils/navigationUtils";
import {MAIN_SCREEN} from "../../../constants/screens";

function Signup(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const renderTopContainer = () => (
        <View style={styles.topContainer}>
            <Image source={images.rightOrange} style={styles.orangeStyle}/>
            <Text style={styles.createAccount}>Create Account</Text>
        </View>
    )

    const renderBottomContainer = () => {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.dontHave}>Don’t have an account? </Text>
                <Text style={styles.signUp} onPress={() => navigateToScreen(props, MAIN_SCREEN.LOGIN)}>LOGIN</Text>
            </View>
        )
    }

    const renderMiddleContainer = () => {
        return (
            <View style={styles.textInput}>
                <CustomTextInput placeholder={'Name'} onChange={setName}
                                 inputTextStyle={{
                                     color: AppStyles.colorSet.white,
                                 }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomTextInput placeholder={'Email'} onChange={setEmail}
                                 inputTextStyle={{
                                     color: AppStyles.colorSet.white,
                                 }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomTextInput placeholder={'Password'} onChange={setPassword} secureTextEntryinputTextStyle={{
                    color: AppStyles.colorSet.white,
                }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomTextInput placeholder={'Confirm password'} onChange={setConfirmPassword}
                                 secureTextEntryinputTextStyle={{
                                     color: AppStyles.colorSet.white,
                                 }}
                                 placeholderTextColor={AppStyles.colorSet.white}/>
                <CustomButton title={'SIGN UP'} buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
                              onPress={() => navigateToScreen(props, MAIN_SCREEN.LOGIN)}/>
                <View style={styles.innerContainer}>
                    <View style={styles.iconView}>
                        <Image source={images.fb} style={styles.icons}/>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={images.gmail} style={styles.icons}/>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                {renderTopContainer()}
                {renderMiddleContainer()}
            </SafeAreaView>
            {renderBottomContainer()}
        </>
    )
}

export default Signup
