import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import metrics from '../../themes/Metrics';

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
    width: MetricsMod.hundred,
    height: MetricsMod.hundredTwenty,
  },

  buttonContainer: {
    marginTop: MetricsMod.section,
    marginHorizontal: MetricsMod.marginFifteen,
  },
  title: {
    marginTop: MetricsMod.section,
    marginLeft: MetricsMod.marginFifteen,
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.xlarge,
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

  listContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: MetricsMod.doubleBaseMargin,
    marginVertical: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
    height: metrics.fiveEighty,
  },
  sectionHeaderStyle: {
    backgroundColor: AppStyles.colorSet.bgOrange,
    fontSize: AppStyles.fontSet.normal,
    padding: MetricsMod.baseMargin,
    color: AppStyles.colorSet.white,
  },
  sectionListItemStyle: {
    height: MetricsMod.hundred,
    backgroundColor: AppStyles.colorSet.greenAlpha,
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});
