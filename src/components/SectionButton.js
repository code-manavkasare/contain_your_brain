import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';

import Feather from 'react-native-vector-icons/Feather';

export default function SectionButton({onPress, text, icon, width}) {
  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
      <View style={[styles.container, width && {width}]}>
        <View style={styles.left}>
          <Feather name={icon} color={colors.card} size={sizes.icon} />
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: sizes.width - sizes.padding * 2,
    alignSelf: 'center',
    height: 58,
    flexDirection: 'row',
    backgroundColor: colors.card,
    elevation: 10,
    shadowOpacity: 1,
    shadowColor: colors.shadow,
    borderRadius: sizes.radius,
  },
  left: {
    paddingHorizontal: sizes.padding,
    borderTopLeftRadius: sizes.radius,
    borderBottomLeftRadius: sizes.radius,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: sizes.padding / 2,
  },
  text: {
    color: colors.text,
    fontSize: sizes.h5,
  },
});
