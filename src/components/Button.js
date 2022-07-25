import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';

export default function Button({active, onPress, text}) {
  return (
    <TouchableOpacity
      disabled={!active}
      onPress={onPress ? onPress : () => {}}
      style={active ? styles.active : styles.inactive}>
      <Text style={active ? styles.activeText : styles.inactiveText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {
    paddingHorizontal: sizes.padding * 2,
    paddingVertical: 16,
    backgroundColor: colors.secondary,
    borderRadius: sizes.radius * 4,
  },
  inactive: {
    paddingHorizontal: sizes.padding * 2,
    paddingVertical: 16,
    backgroundColor: colors.inactive,
    borderRadius: sizes.radius * 4,
  },
  activeText: {
    fontWeight: 'bold',
    fontSize: sizes.h5,
    color: colors.card,
  },
  inactiveText: {
    fontWeight: 'bold',
    fontSize: sizes.h5,
    color: colors.gray,
  },
});
