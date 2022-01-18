import React from "react"
import styles from './styles'
import {Image, SafeAreaView, StatusBar, Text, View} from "react-native";
import images from "../../../themes/Images";
import CustomTextInput from "../../../components/customTextInput";
import CustomButton from "../../../components/CustomButton";
import {navigateToScreen} from "../../../utils/navigationUtils";
import {MAIN_SCREEN} from "../../../constants/screens";

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const renderTopContainer = () => (
        <View style={styles.topContainer}>
            <Image source={images.orange} style={styles.orangeStyle}/>
            <Image source={images.green} style={styles.greenStyle}/>
            <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
    )

    const renderMiddleContainer = () => {
        return (
            <View style={styles.textInput}>
                <CustomTextInput placeholder={'Email'} onChange={setEmail}/>
                <CustomTextInput placeholder={'Password'} onChange={setPassword} secureTextEntry/>
                <Text style={styles.forgetPassword}>Forgot Password ?</Text>
                <CustomButton title={'SIGN IN'} onPress={() => navigateToScreen(props, MAIN_SCREEN.PROFILE)}/>
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

    const renderBottomContainer = () => {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.dontHave}>Don’t have an account? </Text>
                <Text style={styles.signUp} onPress={() => navigateToScreen(props, MAIN_SCREEN.SIGN_UP)}>SIGN UP </Text>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar hidden/>
                {renderTopContainer()}
                {renderMiddleContainer()}
                <Text>{email}</Text>
                <Text>{password}</Text>
            </SafeAreaView>
            {renderBottomContainer()}
        </>
    )
}

export default Login
