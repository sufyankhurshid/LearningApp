import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../VectorIconComponent';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';

function CustomListingComponent(props) {
  const {id, title, userId, body} = props || {};
  return (
    <View style={styles.container}>
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
        />
      </View>
      <Text style={styles.title}>{`Title : ${title}`}</Text>
      <Text style={styles.body}>{`Body : ${body}`}</Text>
    </View>
  );
}

export default CustomListingComponent;

CustomListingComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

CustomListingComponent.propTypes = {
  id: '',
  title: '',
  body: '',
};
