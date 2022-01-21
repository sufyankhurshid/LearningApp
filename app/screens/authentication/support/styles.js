import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.bgGreen,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.doubleBaseMargin,
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

  buttonContainer: {},
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
});
