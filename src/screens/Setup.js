import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
import {useSelector} from 'react-redux';
import Fifteen from '../assets/svg/Fifteen';
import FourtyFive from '../assets/svg/FourtyFive';
import Sixty from '../assets/svg/Sixty';
import Thirty from '../assets/svg/Thirty';
import Button from '../components/Button';
import Container from '../components/Container';
import SectionButton from '../components/SectionButton';
import {navigate} from '../services/navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Setup() {
  const [place, setPlace] = useState('');
  const {worryTimes} = useSelector(state => state.worries);

  const handleSave = () => {};

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <Heading>Setup: </Heading>
      <Heading>My worry time & place</Heading>

      <View style={styles.container}>
        <SubHeading>Worry times</SubHeading>

        <View style={[styles.row, {marginTop: sizes.padding}]}>
          <Label>What time/s do I want to worry?</Label>
          <View style={styles.row}>
            <Entypo
              name="info-with-circle"
              size={sizes.p}
              color={colors.gray}
            />
            <Text style={styles.help}>Tips</Text>
          </View>
        </View>
        <SectionButton
          icon="plus-circle"
          text="Add a Worry time"
          onPress={() => navigate('AddWorryTime')}
        />

        <Container>
          {worryTimes.map((item, index) => (
            <Tile key={index} {...item} index={index} />
          ))}
        </Container>
      </View>

      <View style={styles.container}>
        <SubHeading>Worry place</SubHeading>

        <View style={[styles.row, {marginTop: sizes.padding}]}>
          <Label>Where do I want to worry?</Label>
          <View style={styles.row}>
            <Entypo
              name="info-with-circle"
              size={sizes.p}
              color={colors.gray}
            />
            <Text style={styles.help}>Tips</Text>
          </View>
        </View>

        <TextInput
          value={place}
          style={styles.input}
          onChangeText={e => setPlace(e)}
          placeholder="e.g. chair in living room, at desk in study"
          placeholderTextColor={colors.placeholder}
        />
      </View>

      <View style={styles.container}>
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

const Tile = ({time, day, duration, index}) => {
  const handleEdit = () => {};
  const handleRemove = () => {};

  return (
    <View style={styles.tile}>
      {getDurationIcon(duration)}
      <View style={{flex: 1}}>
        <Text style={[styles.tileText, {color: colors.text}]}>{day}</Text>
        <Text style={[styles.tileText, {color: colors.secondary}]}>
          {moment(time).format('h:mm a')}
        </Text>
      </View>

      <TouchableOpacity onPress={handleEdit}>
        <MaterialCommunityIcons
          name="pencil-outline"
          color={colors.gray}
          size={sizes.h3}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRemove} style={{marginLeft: sizes.p}}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.gray}
          size={sizes.h3}
        />
      </TouchableOpacity>
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
    paddingVertical: sizes.padding,
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
    paddingVertical: sizes.padding / 2,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.tileBorder,
    elevation: 5,
    shadowColor: colors.shadow,
    alignItems: 'center',
  },
  tileText: {
    fontSize: sizes.h5,
  },
});
