import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: '45%',
  },
  textInput: {
    paddingHorizontal: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.doubleBaseMargin,
  },
  forgetPassword: {
    paddingHorizontal: MetricsMod.marginFifteen,
  },
  welcomeText: {
    width: '50%',
    position: 'absolute',
    left: 17,
    top: 100,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.xmlarge,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
  },
  orangeStyle: {
    width: MetricsMod.threeHundred,
    height: MetricsMod.threeHundredTen,
  },
  greenStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: MetricsMod.hundredEighty,
    height: MetricsMod.twoSixtySeven,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerContainer: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.bgOrange,
  },
  signUp: {
    marginLeft: MetricsMod.smallMargin,
    color: AppStyles.colorSet.bgGreen,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
  },
  dontHave: {
    color: AppStyles.colorSet.white,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.smaller,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normalI,
    color: AppStyles.colorSet.bgGreen,
    lineHeight: MetricsMod.thirtyEight,
  },
});
