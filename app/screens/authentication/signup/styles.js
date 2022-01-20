import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.bgGreen,
  },
  topContainer: {
    height: '28%',
  },
  textInput: {
    justifyContent: 'center',
    paddingHorizontal: MetricsMod.baseMargin,
  },
  orangeStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '45%',
    height: '29%',
  },
  createAccount: {
    width: '50%',
    marginLeft: MetricsMod.marginFifteen,
    marginTop: MetricsMod.baseMarginIII,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.xlarge,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: MetricsMod.thirty
  },
  userImage: {
    width: MetricsMod.hundredTwenty,
    height: MetricsMod.hundredTwenty,
    borderRadius: MetricsMod.hundredTwenty / 2,
    borderColor: AppStyles.colorSet.dividerColor,
    borderWidth: MetricsMod.xSmallMarginIII,
    // marginVertical: MetricsMod.marginFifteen
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    height: MetricsMod.section,
    width: MetricsMod.section,
  },
  iconView: {
    paddingHorizontal: '10%',
    paddingVertical: '3%',
    backgroundColor: AppStyles.colorSet.greyColor,
    borderRadius: MetricsMod.baseMargin,
  },
  footerContainer: {
    height: '5%',
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
  radioContainer: {
    marginHorizontal: MetricsMod.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: '50%',
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
    marginLeft: MetricsMod.smallMargin,
  },
});
