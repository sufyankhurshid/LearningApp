import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: MetricsMod.section,
    padding: MetricsMod.smallMargin,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.doubleBaseMargin,
    elevation: MetricsMod.baseMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
