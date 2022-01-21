import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    lineHeight: MetricsMod.thirtyEight,
    marginRight: MetricsMod.baseMargin,
  },
});
