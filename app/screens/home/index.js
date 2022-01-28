import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import {useDispatch} from 'react-redux';
import {isLoggedIn, loginStatus} from '../../redux/Action/user';
import CustomListingComponent from '../../components/CustomListingComponent';
import {useCustomFetch} from '../../hooks/useCustomFetch';
import LoadingComponent from '../../components/LoadingComponent';
import {FloatingAction} from 'react-native-floating-action';
import {ACTION, ICON_TYPES} from '../../constants/constant';
import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../../components/VectorIconComponent';
import images from '../../themes/Images';
import {isNetworkAvailable} from '../../utils/NetworkUtils';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';

function Home(props) {
  const dispatch = useDispatch();
  const isConnected = isNetworkAvailable;

  const {response, error, loading} = useCustomFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const logout = async () => {
    await dispatch(isLoggedIn(false));
    dispatch(loginStatus({}));
  };

  const renderItem = item => {
    const {id, title, userId, body} = item?.item || {};
    return (
      <CustomListingComponent
        userId={userId}
        id={id}
        title={title}
        body={body}
      />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        {(loading || error) && <LoadingComponent loading={loading} />}
      </View>
    );
  };

  const onPressItem = name => {
    switch (name) {
      case 'createPost':
        navigateToScreen(props, MAIN_SCREEN.CREATE_POST);
        break;
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.createAccount}>Home</Text>
      <Image source={images.rightOrange} style={styles.orangeStyle} />
      <VectorIconComponent
        style={styles.logout}
        name={'logout'}
        size={MetricsMod.thirty}
        color={AppStyles.colorSet.white}
        type={ICON_TYPES.SimpleLineIcons}
        onPress={logout}
      />

      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
        }}
        data={response}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={item => item.id}
      />
      <FloatingAction
        actions={ACTION}
        onPressItem={onPressItem}
        color={AppStyles.colorSet.bgOrange}
      />
    </SafeAreaView>
  );
}

export default Home;
