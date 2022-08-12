import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';
import Paragraph from './Paragraph';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Tile({text, selected, onPress, chevron, style}) {
  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
      <View style={[styles.container, style]}>
        <Paragraph>{text}</Paragraph>
        {selected && (
          <FontAwesome
            name="check-circle-o"
            color={colors.secondary}
            size={sizes.icon * 0.75}
          />
        )}
        {chevron && (
          <Feather
            name="chevron-right"
            color={colors.text}
            size={sizes.icon * 0.75}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.padding / 2,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.tileBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
