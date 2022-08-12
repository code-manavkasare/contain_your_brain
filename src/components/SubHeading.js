import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function SubHeading({children, color}) {
  return <Text style={[styles.subHeading, color && {color}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  subHeading: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h4,
    color: colors.primary,
  },
});
