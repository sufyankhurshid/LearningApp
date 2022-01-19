import {StyleSheet} from "react-native";
import {AppStyles, MetricsMod} from "../../../themes";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        height: '45%'
    },
    textInput: {
        paddingHorizontal: MetricsMod.baseMargin,
        paddingVertical: MetricsMod.doubleBaseMargin
    },
    forgetPassword: {
        paddingHorizontal: MetricsMod.marginFifteen,
    },
    welcomeText: {
        width: '50%',
        position: 'absolute',
        left: 17,
        top: 100,
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.xmlarge,
        color: AppStyles.colorSet.white,
        lineHeight: MetricsMod.marginFortyFive
    },
    orangeStyle: {
        width: '75%',
        height: '100%'
    },
    greenStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '48%',
        height: '90%'
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icons: {
        height: MetricsMod.section,
        width: MetricsMod.section
    },
    iconView: {
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: AppStyles.colorSet.greyColor,
        borderRadius: MetricsMod.baseMargin
    },
    footerContainer: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppStyles.colorSet.bgOrange
    },
    signUp: {
        marginLeft: MetricsMod.smallMargin,
        color: AppStyles.colorSet.bgGreen,
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.normal
    },
    dontHave: {
        color: AppStyles.colorSet.white,
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.smaller
    }

})
