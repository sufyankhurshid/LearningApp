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
  textInput: {
    paddingHorizontal: MetricsMod.baseMargin,
    paddingTop: MetricsMod.thirty,
    paddingBottom: MetricsMod.fifty,
  },
  icon: {
    marginTop: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.baseMargin,
  },
  multilineTextInput: {
    height: MetricsMod.hundredFifty,
    color: AppStyles.colorSet.white,
    textAlignVertical: 'top',
  },
});
