import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import {RFValue} from 'react-native-responsive-fontsize';

export default function Heading({children, color, style}) {
  return (
    <Text style={[styles.heading, color && {color}, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Raleway-Bold',
    fontSize: RFValue(sizes.h4),
    color: colors.text,
  },
});
