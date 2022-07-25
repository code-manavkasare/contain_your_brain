import React from 'react';
import {StyleSheet, View} from 'react-native';
import {sizes} from '../constants/sizes';

export default function Container({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.padding,
  },
});
