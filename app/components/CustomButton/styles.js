import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: MetricsMod.smallMargin,
  },
  button: {
    width: '90%',
    backgroundColor: AppStyles.colorSet.bgGreen,
    paddingVertical: MetricsMod.smallMarginII,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: MetricsMod.baseMargin,
  },
  textButtonVerify: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.small,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
