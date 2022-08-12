import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Heading from '../components/Heading';
import Label from '../components/Label';
import SubHeading from '../components/SubHeading';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import moment from 'moment';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import Fifteen from '../assets/svg/Fifteen';
import FourtyFive from '../assets/svg/FourtyFive';
import Sixty from '../assets/svg/Sixty';
import Thirty from '../assets/svg/Thirty';
import Button from '../components/Button';
import Container from '../components/Container';
import SectionButton from '../components/SectionButton';
import {navigate} from '../services/navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeWorryTime} from '../redux/actions/worries';

import {SwipeListView} from 'react-native-swipe-list-view';

export default function Setup() {
  const dispatch = useDispatch();
  const [place, setPlace] = useState('');
  const {worryTimes} = useSelector(state => state.worries);

  const handleSave = () => {};

  const handleEdit = ({
    index,
    time,
    day,
    duration,
    addToCalendar,
    ringMyAlarm,
    rowMap,
  }) => {
    closeRow(rowMap, index);
    navigate('AddWorryTime', {
      item: {
        time,
        day,
        duration,
        addToCalendar,
        ringMyAlarm,
      },
      index,
      edit: true,
    });
  };

  const handleRemove = (index, rowMap) => {
    closeRow(rowMap, index);
    dispatch(removeWorryTime(index));
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableWithoutFeedback
        onPress={() =>
          handleEdit({
            index: data.index,
            time: data.item.time,
            day: data.item.day,
            duration: data.item.duration,
            addToCalendar: data.item.addToCalendar,
            ringMyAlarm: data.item.ringMyAlarm,
            rowMap,
          })
        }>
        <View style={[styles.btn, {backgroundColor: colors.secondary}]}>
          <MaterialCommunityIcons
            name="pencil-outline"
            color={colors.card}
            size={sizes.h3}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => handleRemove(data.index, rowMap)}>
        <View style={[styles.btn, {backgroundColor: colors.tertiary}]}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={colors.card}
            size={sizes.h3}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <Heading>Setup: </Heading>
      <Heading>My worry time & place</Heading>

      <View style={styles.container}>
        <SubHeading>Worry times</SubHeading>

        <View style={[styles.row, {marginTop: sizes.padding / 2}]}>
          <Label>What time/s do I want to worry?</Label>
          <TouchableWithoutFeedback
            onPress={() => navigate('Tips', {type: 'worryTimes'})}>
            <View style={styles.row}>
              <Entypo
                name="info-with-circle"
                size={sizes.p}
                color={colors.gray}
              />
              <Text style={styles.help}>Tips</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <SectionButton
          width={sizes.width * 0.8}
          icon="plus-circle"
          text="Add a Worry time"
          onPress={() => navigate('AddWorryTime')}
        />

        <Container>
          <SwipeListView
            data={worryTimes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Tile key={index} {...item} index={index} />
            )}
            contentContainerStyle={{
              borderRadius: sizes.radius,
              backgroundColor: colors.card,
            }}
            renderHiddenItem={renderHiddenItem}
            disableRightSwipe
            rightOpenValue={-75 * 2}
          />
        </Container>
      </View>

      <View style={{marginTop: -sizes.padding * 2}}>
        <SubHeading>Worry place</SubHeading>

        <View style={[styles.row, {marginTop: sizes.padding / 2}]}>
          <Label>Where do I want to worry?</Label>
          <TouchableWithoutFeedback
            onPress={() => navigate('Tips', {type: 'worryPlace'})}>
            <View style={styles.row}>
              <Entypo
                name="info-with-circle"
                size={sizes.p}
                color={colors.gray}
              />
              <Text style={styles.help}>Tips</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <TextInput
          value={place}
          style={styles.input}
          onChangeText={e => setPlace(e)}
          placeholder="e.g. chair in living room, at desk in study"
          placeholderTextColor={colors.placeholder}
        />
      </View>

      <View style={[styles.container, {marginBottom: sizes.padding * 4}]}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.cancel}>Cancel setup</Text>
          </TouchableOpacity>
          <Button
            active={worryTimes && worryTimes.length && place}
            onPress={handleSave}
            text="Save my setup"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const Tile = ({time, day, duration, addToCalendar, ringMyAlarm, index}) => {
  return (
    <View style={styles.tile}>
      <View style={{width: '25%', alignItems: 'center'}}>
        <Text style={[styles.tileText, {color: colors.text}]}>
          {moment(time).format('h:mm a')}
        </Text>
      </View>

      <View
        style={[
          styles.row,
          {
            height: 75,
            flex: 1,
            justifyContent: 'flex-start',
            borderLeftWidth: 6,
            borderColor: '#D3EBF9',
          },
        ]}>
        {getDurationIcon(duration)}
        <Text style={[styles.tileText, {color: colors.text}]}>{day}</Text>
      </View>
    </View>
  );
};

const getDurationIcon = duration => {
  switch (duration) {
    case 15:
      return <Fifteen active scale={0.5} />;
    case 30:
      return <Thirty active scale={0.5} />;
    case 45:
      return <FourtyFive active scale={0.5} />;
    case 60:
      return <Sixty active scale={0.5} />;
    default:
      return <Fifteen active scale={0.5} />;
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: sizes.padding / 2,
    paddingHorizontal: sizes.padding * 2,
  },
  container: {
    marginVertical: sizes.padding,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  help: {
    fontSize: sizes.p,
    color: colors.gray,
    marginLeft: 4,
  },
  input: {
    marginTop: sizes.padding,
    borderRadius: sizes.radius,
    borderWidth: 2,
    borderColor: colors.border,
    paddingHorizontal: sizes.padding,
    color: colors.text,
  },
  cancel: {
    color: colors.tertiary,
  },
  tile: {
    flexDirection: 'row',
    paddingHorizontal: sizes.padding / 2,
    height: 75,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderRadius: sizes.radius,
    borderColor: colors.tileBorder,
    shadowColor: colors.shadow,
    alignItems: 'center',
  },
  tileText: {
    fontSize: sizes.h5,
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 70,
    alignSelf: 'center',
  },
});
