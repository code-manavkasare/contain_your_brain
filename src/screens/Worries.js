import {
  Image,
  ImageEditor,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Container from '../components/Container';
import {useSelector} from 'react-redux';

import {navigate} from '../services/navigation';

export default function Worries() {
  const [query, setQuery] = useState('');
  const {worries} = useSelector(state => state.worries);
  const [filteredWorries, setFilteredWorries] = useState(worries);

  const handleSearch = e => {
    setQuery(e);
    if (e === '') return setFilteredWorries(worries);
    setFilteredWorries(
      worries.filter(item =>
        item.worry.toLowerCase().includes(e.toLowerCase()),
      ),
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.background}}>
      <Screen>
        <Heading>My unsolvable worries</Heading>

        <View style={styles.input}>
          <Feather name="search" color={colors.placeholder} size={sizes.h4} />
          <TextInput
            value={query}
            onChangeText={handleSearch}
            style={styles.subInput}
            placeholder="Search my worries"
            placeholderTextColor={colors.placeholder}
          />
        </View>

        <View style={{marginTop: sizes.padding * 2}}>
          {filteredWorries.map((item, index) => (
            <Tile
              text={item.worry}
              key={index}
              onPress={() => navigate('Worry', {item})}
            />
          ))}
        </View>

        <Container>
          <View style={styles.row}>
            <Image
              source={require('../assets/thumbs.png')}
              style={styles.image}
            />
            <Text style={styles.caption}>
              When you add a worry it lands here. You can reorder and highlight
              the worries you want to focus on the most. When it's your worry
              time, click on a worry and away you go!
            </Text>
          </View>
        </Container>
      </Screen>
    </ScrollView>
  );
}

const Tile = ({text, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
    <View style={styles.tile}>
      <AntDesign name="staro" size={sizes.h4} color={colors.gray} />
      <Text style={styles.text}>{text}</Text>
      <Feather name="chevron-right" color={colors.text} size={sizes.h4} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.padding,
    borderRadius: sizes.radius,
    backgroundColor: colors.searchbar,
    paddingHorizontal: sizes.padding,
    color: colors.text,
  },
  subInput: {
    flex: 1,
    color: colors.text,
    marginLeft: 5,
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.padding,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: sizes.radius,
    shadowColor: colors.shadow,
    marginVertical: sizes.padding / 4,
  },
  text: {
    flex: 1,
    color: colors.text,
    marginLeft: sizes.padding,
    fontFamily: colors.text,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  caption: {
    marginRight: sizes.padding * 3,
    marginLeft: sizes.padding / 2,
    fontSize: 10,
    fontStyle: 'italic',
    color: colors.gray,
  },
});
