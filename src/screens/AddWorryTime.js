import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import {TimePicker} from 'react-native-wheel-picker-android';
import Fifteen from '../assets/svg/Fifteen';
import FourtyFive from '../assets/svg/FourtyFive';
import Sixty from '../assets/svg/Sixty';
import Thirty from '../assets/svg/Thirty';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Label from '../components/Label';
import Screen from '../components/Screen';
import SectionButton from '../components/SectionButton';
import Tile from '../components/Tile';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';
import {goBack} from '../services/navigation';

import {useDispatch} from 'react-redux';
import {appendWorryTime, updateWorryTime} from '../redux/actions/worries';

export default function AddWorryTime({route}) {
  const {item, index, edit} = route && route.params ? route.params : {};
  const [duration, setDuration] = useState(15);
  const [day, setDay] = useState([]);
  const [addToCalendar, setAddToCalendar] = useState(false);
  const [ringMyAlarm, setRingMyAlarm] = useState(false);
  const [time, setTime] = useState(undefined);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setDay(item.day);
      setTime(item.time);
      setDuration(item.duration);
      setRingMyAlarm(item.ringMyAlarm);
      setAddToCalendar(item.addToCalendar);
    }
  }, []);

  const handleSave = () => {
    const data = {
      index,
      time,
      day,
      duration,
      addToCalendar,
      ringMyAlarm,
    };
    if (edit) dispatch(updateWorryTime(data));
    else dispatch(appendWorryTime(data));
    goBack();
  };

  const getActive = () => {
    if (edit) {
      return (
        day !== item.day ||
        duration !== item.duration ||
        time !== item.time ||
        addToCalendar !== item.addToCalendar ||
        ringMyAlarm !== item.ringMyAlarm
      );
    } else {
      return time && day;
    }
  };

  return (
    <ScrollView style={styles.scrollview}>
      <Time time={time} setTime={setTime} visible={show} setVisible={setShow} />
      <View style={styles.container}>
        <Screen>
          <Heading>{edit ? 'Update worry time' : 'Add a worry time'}</Heading>
          <Container>
            <Label>What time do I want to worry?</Label>
            <SectionButton
              onPress={() => setShow(true)}
              icon="watch"
              text={
                time
                  ? moment(time).format('h:mm a')
                  : 'Tap to open the worry time selector'
              }
            />
          </Container>

          <Container>
            <Label>How long do I want to worry?</Label>
            <Timers duration={duration} setDuration={setDuration} />
          </Container>

          <Container>
            <Label>How often do I want to worry?</Label>
            <Days day={day} setDay={setDay} />
          </Container>

          <Container>
            <Label>Do I want a notification of my worry time?</Label>
            <Tile
              text="Add this time to my calendar"
              selected={addToCalendar}
              onPress={() => setAddToCalendar(!addToCalendar)}
            />
            <Tile
              text="Ring my alarm at this time"
              selected={ringMyAlarm}
              onPress={() => setRingMyAlarm(!ringMyAlarm)}
            />
          </Container>

          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.cancel}>Cancel time</Text>
            </TouchableOpacity>
            <Button
              active={getActive()}
              text="Save my time"
              onPress={handleSave}
            />
          </View>
        </Screen>
      </View>
    </ScrollView>
  );
}

const Time = ({visible, setVisible, time, setTime}) => {
  let _time = time;

  return (
    <Modal
      onBackdropPress={() => setVisible(false)}
      isVisible={visible}
      onDismiss={() => setVisible(false)}
      style={styles.modal}>
      <View style={[styles.row, {justifyContent: 'space-evenly'}]}>
        <Feather name="watch" color={colors.text} size={sizes.icon} />
        <Heading>Select my worry time</Heading>
      </View>
      <View style={{marginTop: sizes.padding}}>
        <TimePicker
          initDate={_time}
          onTimeSelected={e => (_time = e)}
          hideIndicator
        />
      </View>
      <View style={[styles.row]}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Button
          active
          text="Select this time"
          onPress={() => {
            setTime(_time);
            setVisible(false);
          }}
        />
      </View>
    </Modal>
  );
};

const Days = ({day, setDay}) => {
  const onPress = _day => {
    if (day === _day) return setDay(undefined);
    else return setDay(_day);
  };

  return (
    <View>
      <Tile
        text="Every Monday"
        selected={day === 'Monday'}
        onPress={() => onPress('Monday')}
      />
      <Tile
        text="Every Tuesday"
        selected={day === 'Tuesday'}
        onPress={() => onPress('Tuesday')}
      />
      <Tile
        text="Every Wednesday"
        selected={day === 'Wednesday'}
        onPress={() => onPress('Wednesday')}
      />
      <Tile
        text="Every Thursday"
        selected={day === 'Thursday'}
        onPress={() => onPress('Thursday')}
      />
      <Tile
        text="Every Friday"
        selected={day === 'Friday'}
        onPress={() => onPress('Friday')}
      />
      <Tile
        text="Every Saturday"
        selected={day === 'Saturday'}
        onPress={() => onPress('Saturday')}
      />
      <Tile
        text="Every Sunday"
        selected={day === 'Sunday'}
        onPress={() => onPress('Sunday')}
      />
    </View>
  );
};

const Timers = ({duration, setDuration}) => (
  <View style={styles.row}>
    <TouchableWithoutFeedback onPress={() => setDuration(15)}>
      <View style={styles.durationContainer}>
        <Fifteen active={duration === 15} />
        <Text style={duration === 15 ? styles.selected : styles.notSelected}>
          15m
        </Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => setDuration(30)}>
      <View style={styles.durationContainer}>
        <Thirty active={duration === 30} />
        <Text style={duration === 30 ? styles.selected : styles.notSelected}>
          30m
        </Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => setDuration(45)}>
      <View style={styles.durationContainer}>
        <FourtyFive active={duration === 45} />
        <Text style={duration === 45 ? styles.selected : styles.notSelected}>
          45m
        </Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => setDuration(60)}>
      <View style={styles.durationContainer}>
        <Sixty active={duration === 60} />
        <Text style={duration === 60 ? styles.selected : styles.notSelected}>
          60m
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: colors.background,
  },
  container: {marginBottom: sizes.padding * 2},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: sizes.padding,
  },
  durationContainer: {
    alignItems: 'center',
  },
  notSelected: {
    marginTop: sizes.padding / 2,
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: sizes.p,
  },
  selected: {
    marginTop: sizes.padding / 2,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: sizes.p,
  },
  cancel: {
    color: colors.tertiary,
  },
  modal: {
    backgroundColor: colors.background,
    flex: 0,
    paddingVertical: sizes.padding,
  },
  timePicker: {
    height: sizes.height * 0.25,
  },
  timePickerText: {
    fontSize: sizes.h5,
  },
});
