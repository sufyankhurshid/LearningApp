import Toast from 'react-native-toast-message';
import {get} from 'lodash';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const showToast = ({type, text}) => {
  Toast.show({
    type: type,
    text1: text,
  });
};

export const getParams = props => get(props, 'route.params', {});
