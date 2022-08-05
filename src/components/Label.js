import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function Label({children, style, color}) {
  return (
    <Text style={[styles.label, style, color && {color}]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: sizes.h5,
    color: colors.secondary,
    marginBottom: sizes.padding / 2,
  },
});
