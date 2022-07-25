import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function Heading({children, color}) {
  return <Text style={[styles.heading, color && {color}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: sizes.h3,
    color: colors.text,
  },
});
