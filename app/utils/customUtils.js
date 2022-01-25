import Toast from 'react-native-toast-message';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const showToast = ({type, text}) => {
  Toast.show({
    type: type,
    text1: text,
  });
};
