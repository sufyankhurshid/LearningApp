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
  },
  icon: {
    marginTop: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.baseMargin,
  },
  multilineTextInput: {
    height: MetricsMod.hundred,
    color: AppStyles.colorSet.white,
    textAlignVertical: 'top',
  },
  imageView: {
    flexDirection: 'row',
    marginHorizontal: MetricsMod.smallMargin,
    height: MetricsMod.hundredFifty,
    marginTop: MetricsMod.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.grayII,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: MetricsMod.baseMargin,
  },
  userImage: {
    borderWidth: 1,
    marginHorizontal: MetricsMod.baseMargin,
    width: MetricsMod.hundredFive,
    height: MetricsMod.hundredTwenty,
    borderColor: AppStyles.colorSet.dividerColor,
  },
  emptyImageView: {
    position: 'absolute',
    top: 200,
    left: 150,
    // flexDirection: 'row',
    // marginHorizontal: MetricsMod.smallMargin,
    // height: MetricsMod.hundredFifty,
    // marginTop: MetricsMod.baseMargin,
    // borderBottomWidth: 1,
    // borderBottomColor: AppStyles.colorSet.grayII,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginVertical: MetricsMod.baseMargin,
  },
  emptyImage: {
    // position: 'absolute',
    // top: 200,
    // left: 150,
    borderWidth: 1,
    marginHorizontal: MetricsMod.baseMargin,
    width: MetricsMod.hundredFive,
    height: MetricsMod.hundredTwenty,
  },
});
