import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sizes} from '../constants/sizes';
import Screen from '../components/Screen';
import {colors} from '../constants/colors';
import SubHeading from '../components/SubHeading';
import Paragraph from '../components/Paragraph';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Container from '../components/Container';
import {navigate} from '../services/navigation';

export default function WorriesList() {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: sizes.padding,
        backgroundColor: colors.background,
      }}>
      <ScrollView
        contentContainerStyle={{paddingBottom: sizes.padding * 4}}
        style={styles.screen}>
        <Tile
          image={require('../assets/illustrations/worries/unsorted.png')}
          heading="Unsorted"
          description="Worries I will SORT in Worry Time"
          onPress={() => navigate('WorriesScreen', {status: 'unsorted'})}
        />
        <Tile
          image={require('../assets/illustrations/worries/solvable.png')}
          heading="Solvable"
          description="Worries I can SOLVE"
          onPress={() => navigate('WorriesScreen', {status: 'solvable'})}
        />
        <Tile
          image={require('../assets/illustrations/worries/unsolvable.png')}
          heading="Unsolvable"
          description="Worries I have to ACCEPT"
          onPress={() => navigate('WorriesScreen', {status: 'unsolvable'})}
        />
        <Tile
          image={require('../assets/illustrations/worries/solved.png')}
          heading="Solved"
          description="Worries I solved, or solved themselves, that I can REFLECT on"
          onPress={() => navigate('WorriesScreen', {status: 'solved'})}
        />
        <Container>
          <View style={styles.row}>
            <Image
              source={require('../assets/thumbs.png')}
              style={styles.captionImage}
            />
            <Text style={styles.caption}>
              In Worry Time, you get to sort your worries into Solvable,
              Unsolvable or Solved categories. This will move your worry from
              Unsorted to one of the other worry time lists. Each category comes
              with its own strategy.
            </Text>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
}

const Tile = ({image, heading, description, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
    <View style={styles.tile}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={{marginLeft: sizes.padding / 2, flex: 1}}>
        <SubHeading color={colors.text}>{heading}</SubHeading>
        <Paragraph style={{fontSize: sizes.p}} color={colors.text}>
          {description}
        </Paragraph>
      </View>
      <View style={{marginRight: sizes.padding / 2}}>
        <Feather name="chevron-right" color={colors.text} size={sizes.icon} />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  tile: {
    height: sizes.height * 0.125,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.radius,
    backgroundColor: colors.card,
    marginHorizontal: sizes.padding,
    marginVertical: sizes.padding,
  },
  imageContainer: {
    width: '30%',
    height: sizes.height * 0.125,
  },
  image: {
    borderTopLeftRadius: sizes.radius,
    borderBottomLeftRadius: sizes.radius,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: sizes.padding,
  },
  captionImage: {
    width: 70,
    height: 70,
  },
  caption: {
    marginRight: sizes.padding * 4,
    marginLeft: sizes.padding / 2,
    fontSize: 10,
    fontStyle: 'italic',
    color: colors.gray,
  },
});
