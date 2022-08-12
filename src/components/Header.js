import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {goBack} from '../services/navigation';

export default function Header({showBack, vertical}) {
  return (
    <SafeAreaView style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={() => goBack()} style={styles.backContainer}>
          <FontAwesome
            name="long-arrow-left"
            color={colors.gray}
            size={sizes.p}
          />
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      )}
      <Image
        source={
          vertical
            ? require('../assets/small-vertical-logo.png')
            : require('../assets/logo.png')
        }
        resizeMode="contain"
        style={[styles.logo, vertical && {height: 92.6, width: 62.7}]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: sizes.width,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.padding / 2,
  },
  logo: {
    height: 39,
    width: 98,
  },
  backContainer: {
    position: 'absolute',
    left: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: sizes.p,
    marginLeft: 5,
  },
});
