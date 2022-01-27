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
    width: MetricsMod.eightyFive,
    height: MetricsMod.hundred,
  },
  createAccount: {
    position: 'absolute',
    left: 10,
    top: 70,
    // marginLeft: MetricsMod.marginFifteen,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.large,
    color: AppStyles.colorSet.white,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    marginTop: 20,
    width: MetricsMod.eighty,
    height: MetricsMod.eighty,
    borderRadius: MetricsMod.eighty / 2,
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
    marginHorizontal: MetricsMod.thirty,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
    marginLeft: MetricsMod.smallMargin,
  },
  datePicker: {
    width: '100%',
    marginHorizontal: MetricsMod.smallMargin,
    marginTop: MetricsMod.smallMargin,
  },
  error: {
    fontSize: AppStyles.fontSet.tiny,
    color: AppStyles.colorSet.red,
    marginLeft: MetricsMod.seven,
  },
  errorExist: {
    textAlign: 'center',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.red,
    marginTop: MetricsMod.baseMargin,
    marginLeft: MetricsMod.seven,
  },
  errorGender: {
    textAlign: 'center',
    fontSize: AppStyles.fontSet.tiny,
    color: AppStyles.colorSet.red,
    marginLeft: MetricsMod.seven,
  },

  input: {
    height: MetricsMod.forty,
    marginHorizontal: MetricsMod.smallMargin,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.grayII,
    fontSize: AppStyles.fontSet.normal,
  },
  icon: {
    marginTop: MetricsMod.doubleBaseMargin,
  },
});
