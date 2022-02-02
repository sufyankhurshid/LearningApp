import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../VectorIconComponent';
import {AppStyles, MetricsMod} from '../../themes';
import LoadingComponent from '../LoadingComponent';

function CustomListingComponent(props) {
  const {id, title, userId, body, onPressItem, onPressThreeDots, loading} =
    props || {};

  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.id}>{`User ID : ${userId}`}</Text>
          <Text style={styles.title}>{`ID : ${id}`}</Text>
        </View>
        <VectorIconComponent
          style={styles.icon}
          name={'dots-three-vertical'}
          size={MetricsMod.twentyThree}
          color={AppStyles.colorSet.white}
          type={ICON_TYPES.Entypo}
          onPress={onPressThreeDots}
        />
      </View>
      <Text style={styles.title}>{`Title : ${title}`}</Text>
      <Text style={styles.body}>{`Body : ${body}`}</Text>
      {loading && (
        <LoadingComponent
          loading={loading}
          color={AppStyles.colorSet.bgOrange}
          containerStyle={styles.emptyContainer}
        />
      )}
    </TouchableOpacity>
  );
}

export default CustomListingComponent;
