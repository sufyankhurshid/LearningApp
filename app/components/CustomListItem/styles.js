import {StyleSheet} from 'react-native';
import AppStyles from '../../themes/AppStyles';
import {MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colorSet.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.marginFifteen,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginLeft: MetricsMod.baseMarginIII,
    color: AppStyles.colorSet.blackN,
    fontSize: AppStyles.fontSet.normal,
  },
});
