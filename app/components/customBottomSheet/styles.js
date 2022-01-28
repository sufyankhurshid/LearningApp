import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: MetricsMod.smallMargin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.white,
  },
});
