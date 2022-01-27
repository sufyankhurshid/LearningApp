import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.bgGreen,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: MetricsMod.baseMargin,
    paddingTop: MetricsMod.hundred,
    paddingBottom: MetricsMod.fifty,
  },
  orangeStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: MetricsMod.hundredFifty,
    height: MetricsMod.hundredSeventyFive,
  },

  buttonContainer: {
    marginHorizontal: MetricsMod.marginFifteen,
  },
  title: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normalI,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirtyEight,
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirtyEight,
    marginHorizontal: MetricsMod.baseMargin,
  },
  icon: {
    marginTop: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.baseMargin,
  },
});
