import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import {colors} from '../constants/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {sizes} from '../constants/sizes';
import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import Label from '../components/Label';
import ActiveRadio from '../assets/svg/ActiveRadio';
import InactiveRadio from '../assets/svg/InactiveRadio.js';
import Button from '../components/Button';

export default function Worry({route}) {
  const {item} = route?.params;
  const [status, setStatus] = useState(item.status);

  const handleFav = () => {};
  const handleRemove = () => {};
  const handleEditHeading = () => {};
  const handleSave = () => {};

  return (
    <ScrollView style={styles.screen}>
      <Screen>
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Heading>Worry time!</Heading>
          </View>

          <TouchableOpacity onPress={handleRemove}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={colors.gray}
              size={sizes.h3}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleFav}
            style={{marginLeft: sizes.padding}}>
            <AntDesign name="staro" color={colors.gray} size={sizes.h3} />
          </TouchableOpacity>
        </View>

        <Container>
          <View style={[styles.row, {alignItems: 'flex-start'}]}>
            <View style={{flex: 1}}>
              <Heading color={colors.secondary}>{item.worry}</Heading>
            </View>

            <TouchableOpacity onPress={handleEditHeading}>
              <MaterialCommunityIcons
                name="pencil-outline"
                color={colors.gray}
                size={sizes.h3}
              />
            </TouchableOpacity>
          </View>
        </Container>

        <View style={[styles.row, {alignItems: 'flex-start'}]}>
          <View style={{flex: 1}}>
            <Text style={styles.info}>{item.info}</Text>
          </View>

          <TouchableOpacity onPress={handleEditHeading}>
            <MaterialCommunityIcons
              name="pencil-outline"
              color={colors.gray}
              size={sizes.h3}
            />
          </TouchableOpacity>
        </View>

        <Container>
          <View style={[styles.row]}>
            <View style={{flex: 1}}>
              <SubHeading>Sort my worry</SubHeading>
            </View>

            <View style={styles.row}>
              <Entypo
                name="info-with-circle"
                size={sizes.p}
                color={colors.gray}
              />
              <Text style={styles.help}>Tips</Text>
            </View>
          </View>
          <Label>This step helps address my worry more effectively.</Label>

          <Container>
            <Checkbox
              selected={status === 'solvable'}
              heading="Solvable"
              description="I can come up with solutions for this worry or problem."
              onPress={() => setStatus('solvable')}
            />

            <Checkbox
              selected={status === 'unsolvable'}
              heading="Unsolvable"
              description="There are no solutions to this worry and/or I can't solve it because it is not under my control"
              onPress={() => setStatus('unsolvable')}
            />
            <Checkbox
              selected={status === 'solved'}
              heading="Solved"
              description="This worry is no longer an issue because I already solved it, someone else solved it, or it solved itself."
              onPress={() => setStatus('solved')}
            />
            <Checkbox
              selected={status === 'notsure'}
              heading="Not sure"
              description="I don't know if I can solve this worry or not."
              onPress={() => setStatus('notsure')}
            />
          </Container>
        </Container>

        <View>
          <View style={[styles.row]}>
            <View style={{flex: 1}}>
              <SubHeading>Solve my worry</SubHeading>
            </View>

            <View style={styles.row}>
              <Entypo
                name="info-with-circle"
                size={sizes.p}
                color={colors.gray}
              />
              <Text style={styles.help}>Tips</Text>
            </View>
          </View>
          <Label>What can I do to solve this worry?</Label>

          <View style={[styles.row, {alignItems: 'flex-start'}]}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>
                Phasellus eget sem vitae velit condiment umemo tincidunt
                porttitor diam non. Proin pretium purus et erat Scelerisque
                Bibendum rutrum Ipsum rutrum
              </Text>
            </View>

            <TouchableOpacity onPress={handleEditHeading}>
              <MaterialCommunityIcons
                name="pencil-outline"
                color={colors.gray}
                size={sizes.h3}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Container>
          <View style={styles.row}>
            <Image
              source={require('../assets/thumbs.png')}
              style={styles.image}
            />
            <Text style={styles.caption}>
              If your anxiety is extremely intense, very frequent, and lasts too
              long, or if it is often in response to things that are not
              threatening, and/or if it's having a significant negative impact
              on your life—seek professional support. Asking for help is one of
              the most effective strategies there is!
            </Text>
          </View>
        </Container>

        <Container>
          <View style={styles.row}>
            <TouchableOpacity style={{flex: 1}}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <Button active onPress={handleSave} text="Save my worry" />
          </View>
        </Container>
      </Screen>
    </ScrollView>
  );
}

const Checkbox = ({selected, heading, description, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress ? onPress : () => {}}>
    <View
      style={[
        styles.row,
        {marginBottom: sizes.padding, alignItems: 'flex-start'},
      ]}>
      <View>{selected ? <ActiveRadio /> : <InactiveRadio />}</View>

      <View style={{marginLeft: sizes.padding / 2, marginTop: -5}}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>{heading}</Text>
        <Text style={[styles.text]}>{description}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontSize: sizes.h5,
    color: colors.text,
    marginRight: sizes.padding * 2,
  },
  help: {
    fontSize: sizes.p,
    color: colors.gray,
    marginLeft: 4,
  },
  text: {
    fontSize: sizes.h5,
    color: colors.text,
  },
  image: {
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
  cancel: {
    color: colors.tertiary,
  },
});
