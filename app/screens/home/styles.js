import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.bgGreen,
  },
  orangeStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: MetricsMod.hundredFifty,
    height: MetricsMod.hundredSeventyFive,
  },
  createAccount: {
    width: '50%',
    marginLeft: MetricsMod.marginFifteen,
    marginTop: MetricsMod.eighty,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.xmlarge,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
  },
  title: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normalI,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirtyEight,
  },
});
