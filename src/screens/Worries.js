import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Heading from '../components/Heading';
import Screen from '../components/Screen';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';

import {useNavigation, useRoute} from '@react-navigation/native';
import {navigate} from '../services/navigation';

import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import Hand from '../assets/svg/Hand';
import {updateWories} from '../redux/actions/worries';

const sortArray = arr => {
  const sortedArr = [
    ...arr.filter(x => x.favourite),
    ...arr.filter(x => !x.favourite),
  ];
  return sortedArr;
};

const filterByStatus = (arr, status) =>
  arr.filter(item =>
    status === 'unsorted' ? item.unsorted : item.status === status,
  );

export default function Worries() {
  const route = useRoute();
  const navigation = useNavigation();
  const {status} = route?.params;
  const [query, setQuery] = useState('');
  const {worries} = useSelector(state => state.worries);
  const dispatch = useDispatch();
  const [filteredWorries, setFilteredWorries] = useState([]);

  navigation.addListener('focus', () => {
    setFilteredWorries(sortArray(filterByStatus(worries, status)));
  });

  const handleSearch = e => {
    setQuery(e);
    if (e === '') return setFilteredWorries(worries);
    setFilteredWorries(
      worries.filter(item =>
        item.worry.toLowerCase().includes(e.toLowerCase()),
      ),
    );
  };

  const onDragEnd = ({data}) => {
    setFilteredWorries(data);
    let _worries = worries.map(item => {
      const index = data.findIndex(q => q.worry === item.worry);
      return {
        worry: data[index].worry,
        status: data[index].status,
        favourite: data[index].favourite,
        solve: data[index].solve,
        info: data[index].info,
      };
    });
    dispatch(updateWories(_worries));
  };

  return (
    <ScrollView
      nestedScrollEnabled
      style={{flex: 1, backgroundColor: colors.background}}>
      <Screen>
        <Heading>
          My {status[0].toUpperCase() + status.slice(1)} worries
        </Heading>

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
        <View
          style={[
            styles.row,
            {marginTop: sizes.padding, marginLeft: sizes.padding},
          ]}>
          <Hand />
          <Paragraph
            style={{fontSize: sizes.p, marginLeft: sizes.padding / 4}}
            color={colors.gray}>
            Touch + hold down a worry item + drag to reposition it
          </Paragraph>
        </View>

        <View style={{marginTop: sizes.padding / 2}}>
          <DraggableFlatList
            data={filteredWorries}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={onDragEnd}
            renderItem={({item, index, drag, isActive}) => (
              <Tile
                drag={drag}
                isActive={isActive}
                text={item.worry}
                favourite={item.favourite}
                key={index}
                onPress={() => navigate('Worry', {item, index})}
              />
            )}
          />
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

const Tile = ({text, favourite, onPress, drag, isActive}) => (
  <ScaleDecorator>
    <TouchableWithoutFeedback
      onLongPress={drag}
      disabled={isActive}
      onPress={onPress ? onPress : () => {}}>
      <View style={[styles.tile]}>
        <AntDesign
          name={favourite ? 'star' : 'staro'}
          color={favourite ? colors.secondary : colors.gray}
          size={sizes.h4}
        />
        <Text style={styles.text}>{text}</Text>
        <Feather name="chevron-right" color={colors.text} size={sizes.h4} />
      </View>
    </TouchableWithoutFeedback>
  </ScaleDecorator>
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
    elevation: 3,
    alignSelf: 'center',
    width: sizes.width * 0.875,
    shadowRadius: sizes.radius,
    shadowOpacity: 1,
    borderRadius: sizes.radius,
    shadowColor: 'rgba(0,0,0,0.25)',
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
