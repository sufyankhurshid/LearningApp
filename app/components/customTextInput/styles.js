import {StyleSheet} from "react-native";
import {AppStyles, MetricsMod} from "../../themes";

export default styles = StyleSheet.create({
    input: {
        height: MetricsMod.forty,
        margin: MetricsMod.smallMargin,
        borderBottomWidth: 1,
        borderBottomColor: AppStyles.colorSet.grayII,
        fontSize: MetricsMod.marginFifteen
    },
});
