import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function Paragraph({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: sizes.h5,
  },
});
