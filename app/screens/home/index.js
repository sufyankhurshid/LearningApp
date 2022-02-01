import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteUserPost,
  fetchUserPost,
  isLoggedIn,
  loginStatus,
} from '../../redux/Action/user';
import CustomListingComponent from '../../components/CustomListingComponent';
import {FloatingAction} from 'react-native-floating-action';
import {ACTION, BOTTOM_LIST, ICON_TYPES} from '../../constants/constant';
import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../../components/VectorIconComponent';
import images from '../../themes/Images';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import CustomBottomSheet from '../../components/customBottomSheet';
import {printLogs} from '../../utils/logUtils';
import LoadingComponent from '../../components/LoadingComponent';
import {delay} from '../../utils/customUtils';

function Home(props) {
  const dispatch = useDispatch();
  const [bottomSheet, setBottomSheet] = useState(false);
  const posts = useSelector(state => state?.user?.fetchUserPost) || [];
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // const {response, error} = useCustomFetch(
  //   'https://jsonplaceholder.typicode.com/posts',
  // );

  useEffect(() => {
    dispatch(fetchUserPost(posts));
    setIsRefreshing(false);
  }, [isRefreshing]);

  const toggleBottomSheet = () => {
    setBottomSheet(prevState => !prevState);
  };

  const onDeletePost = async id => {
    setLoading(true);
    await delay(2000);
    dispatch(deleteUserPost(id));
    setLoading(false);
  };

  const logout = async () => {
    await dispatch(isLoggedIn(false));
    dispatch(loginStatus({}));
  };

  const onPressListItem = item => {
    navigateToScreen(props, MAIN_SCREEN.SHOW_DETAILS_POST, {item});
  };

  const onPressThreeDots = async id => {
    Alert.alert('Warning', 'Are you sure, you want to delete this item', [
      {
        text: 'Cancel',
        onPress: () => printLogs('Cancel'),
      },
      {
        text: 'Ok',
        onPress: () => onDeletePost(id),
      },
    ]);
  };

  const renderItem = item => {
    const {id, title, userId, body} = item?.item || {};
    return (
      <CustomListingComponent
        userId={userId}
        id={id}
        title={title}
        body={body}
        onPressItem={() => onPressListItem(item)}
        onPressThreeDots={() => onPressThreeDots(id)}
      />
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true);
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        {loading && (
          <LoadingComponent
            loading={loading}
            color={AppStyles.colorSet.bgOrange}
          />
        )}
      </View>
    );
  };

  const renderHeaderComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        {loading && (
          <LoadingComponent
            loading={loading}
            color={AppStyles.colorSet.bgOrange}
          />
        )}
      </View>
    );
  };
  const renderFooterComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        {loading && (
          <LoadingComponent
            loading={loading}
            color={AppStyles.colorSet.bgOrange}
          />
        )}
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
        data={posts}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        keyExtractor={item => item.id}
      />
      {loading && (
        <LoadingComponent
          loading={loading}
          color={AppStyles.colorSet.bgGreen}
        />
      )}
      <FloatingAction
        actions={ACTION}
        onPressItem={onPressItem}
        color={AppStyles.colorSet.bgOrange}
      />
      <CustomBottomSheet
        data={BOTTOM_LIST}
        open={bottomSheet}
        close={toggleBottomSheet}
        onPress={onPressThreeDots}
      />
    </SafeAreaView>
  );
}

export default Home;
