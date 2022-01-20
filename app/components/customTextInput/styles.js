import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  input: {
    height: MetricsMod.thirtyEight,
    marginHorizontal: MetricsMod.smallMargin,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.grayII,
    fontSize: MetricsMod.eighteen,
  },
  error: {
    fontSize: AppStyles.fontSet.tiny,
    color: AppStyles.colorSet.red,
    marginTop: MetricsMod.xSmallMarginII,
    marginLeft: MetricsMod.seven,
  },
});
