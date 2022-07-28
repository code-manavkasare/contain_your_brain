import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function Label({children, color}) {
  return <Text style={[styles.label, color && {color}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: sizes.p,
    color: colors.secondary,
    marginBottom: sizes.padding / 2,
  },
});
