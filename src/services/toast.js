import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export const showToast = (type, title, message) => {
  Toast.show({
    text1: title,
    text2: message,
    type,
    position: 'bottom',
    bottomOffset: sizes.height * 0.125,
  });
};

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.secondary,
        width: sizes.width * 0.9,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: colors.tertiary, width: sizes.width * 0.9}}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold',
      }}
    />
  ),
};
