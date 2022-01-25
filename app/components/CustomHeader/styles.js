import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: MetricsMod.xSmallMarginI,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: AppStyles.colorSet.dividerColor,
  },
  iconWhite: {
    color: AppStyles.colorSet.blackX,
  },
  headerText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    color: AppStyles.colorSet.blackX,
    fontSize: MetricsMod.seventeen,
  },
});
