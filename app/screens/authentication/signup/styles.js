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
    paddingHorizontal: MetricsMod.baseMargin,
  },
  orangeStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: MetricsMod.hundred,
    height: MetricsMod.hundredTwenty,
  },
  createAccount: {
    width: '50%',
    marginLeft: MetricsMod.marginFifteen,
    marginTop: MetricsMod.baseMarginIII,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.xlarge,
    color: AppStyles.colorSet.white,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: MetricsMod.hundred,
    height: MetricsMod.hundred,
    borderRadius: MetricsMod.hundred / 2,
    borderColor: AppStyles.colorSet.dividerColor,
    borderWidth: MetricsMod.xSmallMarginIII,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    justifyContent: 'center',
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
  datePicker: {
    width: '100%',
    marginHorizontal: MetricsMod.smallMargin,
    marginTop: MetricsMod.baseMarginIII,
  },
  error: {
    fontSize: AppStyles.fontSet.tiny,
    color: AppStyles.colorSet.red,
    marginTop: MetricsMod.xSmallMarginII,
    marginLeft: MetricsMod.seven,
  },
  input: {
    height: MetricsMod.forty,
    marginHorizontal: MetricsMod.smallMargin,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.grayII,
    fontSize: AppStyles.fontSet.normal,
  },
});
