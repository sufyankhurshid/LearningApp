import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../VectorIconComponent';
import {AppStyles, MetricsMod} from '../../themes';
import LoadingComponent from '../LoadingComponent';

function CustomListingComponent(props) {
  const {
    id,
    title,
    userId,
    body,
    onPressItem = () => {},
    onPressThreeDots = () => {},
    loading = false,
    images,
    containerStyle,
  } = props || {};

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPressItem}>
      <View style={styles.innerContainer}>
        <View>
          {userId && <Text style={styles.id}>{`User ID : ${userId}`}</Text>}
          {id && <Text style={styles.title}>{`ID : ${id}`}</Text>}
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
      {title && <Text style={styles.title}>{`Title : ${title}`}</Text>}
      {body && <Text style={styles.body}>{`Body : ${body}`}</Text>}
      {loading && (
        <LoadingComponent
          loading={loading}
          color={AppStyles.colorSet.bgOrange}
          containerStyle={styles.emptyContainer}
        />
      )}
      {images && (
        <TouchableOpacity style={styles.imageView} activeOpacity={0.9}>
          {images?.map((item, index) => {
            return (
              <View key={index}>
                <Image
                  key={index}
                  source={{uri: item?.uri}}
                  style={styles.userImage}
                />
              </View>
            );
          })}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

export default CustomListingComponent;
