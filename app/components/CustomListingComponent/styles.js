import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colorSet.greenAlpha,
    padding: MetricsMod.baseMargin,
    margin: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
  },
  icon: {
    marginTop: MetricsMod.smallMargin,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirty,
  },
  title: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirty,
  },
  body: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirty,
  },
});
