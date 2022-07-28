import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import Paragraph from '../components/Paragraph';
import {navigate} from '../services/navigation';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function () {
  return (
    <View style={styles.screen}>
      <View style={[styles.row, {marginTop: sizes.padding}]}>
        <VerticalTile type="setup" onPress={() => navigate('Setup')} />
        <VerticalTile type="worries" onPress={() => navigate('Worries')} />
      </View>
      <View style={[{marginTop: sizes.padding}]}>
        <HorizontalTile onPress={() => navigate('Tips')} />
      </View>

      <View style={styles.tilesContainer}>
        <Tile style={styles.tile} text="Download my worries" download />
        <Tile style={styles.tile} text="About Contain Your Brain" brain />
        <Tile style={styles.tile} text="View instruction screens" eye />
      </View>
    </View>
  );
}

const Tile = ({text, onPress, download, brain, eye}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
      <View style={[styles.tile]}>
        <View style={{marginRight: sizes.padding}}>
          {download && (
            <Feather
              name="download"
              color={colors.primary}
              size={sizes.icon * 0.75}
            />
          )}
          {brain && (
            <MaterialCommunityIcons
              name="brain"
              color={colors.primary}
              size={sizes.icon * 0.75}
            />
          )}
          {eye && (
            <Feather
              name="eye"
              color={colors.primary}
              size={sizes.icon * 0.75}
            />
          )}
        </View>
        <View style={{flex: 1}}>
          <Paragraph>{text}</Paragraph>
        </View>
        <Feather
          name="chevron-right"
          color={colors.text}
          size={sizes.icon * 0.75}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const VerticalTile = ({type, onPress}) => {
  const getImage = () => {
    switch (type) {
      case 'setup':
        return require('../assets/illustrations/setup.png');
      case 'worries':
        return require('../assets/illustrations/worries.png');
      default:
        return require('../assets/illustrations/setup.png');
    }
  };

  const getHeading = () => {
    switch (type) {
      case 'setup':
        return 'Setup';
      case 'worries':
        return 'My worries';
      default:
        return 'Setup';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'setup':
        return 'My worry time schedule & place';
      case 'worries':
        return 'My Unsorted, Solvable, Unsolvable & Solved worries';
      default:
        return 'My worry time schedule & place';
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
      <View style={styles.vertical}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={getImage()}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>{getHeading()}</Text>
          <Text style={styles.description}>{getDescription()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const HorizontalTile = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
      <View style={styles.horizontal}>
        <View style={styles.imageContainerH}>
          <Image
            style={styles.imageH}
            source={require('../assets/illustrations/tips.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Tips</Text>
          <Text style={styles.description}>
            Tips on Solving, Accepting & Reflecting on my worries
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding * 1.5,
  },
  vertical: {
    flex: 1,
    height: 275,
    elevation: 10,
    borderRadius: sizes.radius,
    backgroundColor: colors.card,
    marginHorizontal: sizes.padding / 2,
    padding: 0,
  },
  horizontal: {
    height: 88,
    elevation: 10,
    flexDirection: 'row',
    borderRadius: sizes.radius,
    backgroundColor: colors.card,
    marginHorizontal: sizes.padding / 2,
  },
  imageContainer: {
    height: 174,
  },
  imageContainerH: {
    width: '40%',
    height: 88,
  },
  image: {
    borderTopRightRadius: sizes.radius,
    borderTopLeftRadius: sizes.radius,
    width: '100%',
    height: '100%',
  },
  imageH: {
    borderTopLeftRadius: sizes.radius,
    borderBottomLeftRadius: sizes.radius,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 10,
    marginTop: 5,
  },
  heading: {
    fontSize: sizes.h5,
    color: colors.text,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: colors.text,
  },
  tilesContainer: {
    marginTop: sizes.padding * 2,
    backgroundColor: colors.background,
    borderRadius: sizes.radius,
    elevation: 10,
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: sizes.padding,
    borderRadius: sizes.radius,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.tileBorder,
  },
});
