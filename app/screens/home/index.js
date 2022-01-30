import React, {useState} from 'react';
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
import {ACTION, BOTTOM_LIST, ICON_TYPES} from '../../constants/constant';
import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../../components/VectorIconComponent';
import images from '../../themes/Images';
import {navigateToScreen} from '../../utils/navigationUtils';
import {MAIN_SCREEN} from '../../constants/screens';
import CustomBottomSheet from '../../components/customBottomSheet';

function Home(props) {
  const dispatch = useDispatch();
  const [bottomSheet, setBottomSheet] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheet(prevState => !prevState);
  };

  const onDeletePost = async (url, option) => {
    const res = await fetch(url, option);
    if (res?.ok) {
      Toast.show({
        type: 'success',
        text: 'Post deleted successfully...',
      });
    }
  };

  const {response, error, loading} = useCustomFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const logout = async () => {
    await dispatch(isLoggedIn(false));
    dispatch(loginStatus({}));
  };

  const onPressListItem = id => {
    navigateToScreen(props, MAIN_SCREEN.SHOW_DETAILS_POST, {id});
  };

  const onPressThreeDots = async id => {
    await onDeletePost(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    setBottomSheet(false);
  };

  const renderItem = item => {
    const {id, title, userId, body} = item?.item || {};
    return (
      <CustomListingComponent
        userId={userId}
        id={id}
        title={title}
        body={body}
        onPressItem={() => onPressListItem(id)}
        onPressThreeDots={toggleBottomSheet}
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
