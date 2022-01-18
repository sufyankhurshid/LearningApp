import {StyleSheet} from "react-native";
import {AppStyles, MetricsMod} from "../../../themes";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.colorSet.bgGreen,
    },
    topContainer: {
        height: '28%',
    },
    textInput: {
        justifyContent: 'center',
        paddingHorizontal: MetricsMod.baseMargin,
        paddingVertical: MetricsMod.doubleBaseMargin
    },
    orangeStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '42%',
        height: '100%'
    },
    createAccount: {
        width: '50%',
        marginLeft: MetricsMod.marginFifteen,
        marginTop: MetricsMod.ninety,
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.xmlarge,
        color: AppStyles.colorSet.white,
        lineHeight: MetricsMod.marginFortyFive
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: MetricsMod.doubleBaseMargin
    },
    userImage: {
        width: MetricsMod.hundred,
        height: MetricsMod.hundred,
        borderRadius: MetricsMod.hundred / 2,
        borderColor: AppStyles.colorSet.white,
        borderWidth: MetricsMod.smallMargin,
        // marginVertical: MetricsMod.marginFifteen
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
        backgroundColor: '#FF7A30'
    },
    signUp: {
        marginLeft: MetricsMod.smallMargin,
        color: '#07635D',
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.normal
    },
    dontHave: {
        color: AppStyles.colorSet.white,
        fontWeight: 'bold',
        fontSize: AppStyles.fontSet.smaller
    }
})
