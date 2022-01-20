import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: MetricsMod.marginFifteen,
  },
  title: {
    width: '50%',
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.marginFortyFive,
  },
  input: {
    height: MetricsMod.forty,
    marginHorizontal: MetricsMod.smallMargin,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.grayII,
    fontSize: AppStyles.fontSet.normal,
  },
});
