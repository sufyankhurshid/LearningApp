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
import {isLoggedIn} from '../../redux/Action/user';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import CustomListingComponent from '../../components/CustomListingComponent';
import {useCustomFetch} from '../../hooks/useCustomFetch';
import LoadingComponent from '../../components/LoadingComponent';
import {FloatingAction} from 'react-native-floating-action';
import {ACTION, ICON_TYPES} from '../../constants/constant';
import {printLogs} from '../../utils/logUtils';
import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../../components/VectorIconComponent';
import images from '../../themes/Images';
import {isNetworkAvailable} from '../../utils/NetworkUtils';

function Home(props) {
  const dispatch = useDispatch();
  const isConnected = isNetworkAvailable;

  printLogs({isConnected});

  const {response, error, loading} = useCustomFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  printLogs({response, error, loading});
  const logout = async () => {
    await dispatch(isLoggedIn(false));
    navigateToScreen(props, MAIN_SCREEN.LOGIN);
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
        onPressItem={name => {
          printLogs(`selected button: ${name}`);
        }}
        color={AppStyles.colorSet.bgOrange}
      />
    </SafeAreaView>
  );
}

export default Home;
