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
    width: MetricsMod.hundredTwenty,
    height: MetricsMod.hundredForty,
  },
  logout: {
    position: 'absolute',
    right: 30,
    top: 50,
  },
  homeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createAccount: {
    marginLeft: MetricsMod.marginFifteen,
    marginTop: MetricsMod.section,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
