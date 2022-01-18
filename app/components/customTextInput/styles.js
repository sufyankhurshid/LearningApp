import {StyleSheet} from "react-native";
import {AppStyles, MetricsMod} from "../../themes";

export default styles = StyleSheet.create({
    input: {
        height: MetricsMod.forty,
        margin: MetricsMod.baseMarginII,
        borderBottomWidth: 1,
        borderBottomColor: AppStyles.colorSet.grayII,
        padding: MetricsMod.baseMargin,
        fontSize: MetricsMod.marginFifteen
    },
});
