import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import Heading from '../components/Heading';
import Container from '../components/Container';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';

import {appendWorry, setWorryTimes} from '../redux/actions/worries';
import {useDispatch} from 'react-redux';

export default function AddWorry() {
  const [worry, setWorry] = useState('');
  const [info, setInfo] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = {
      worry,
      info,
      status: 'unsolvable',
    };
    dispatch(appendWorry(data));
    dispatch(setWorryTimes([]));
    setWorry('');
    setInfo('');
  };

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <View style={styles.row}>
        <Heading>Add a worry</Heading>
        <View style={styles.row}>
          <View style={styles.row}>
            <Entypo
              name="info-with-circle"
              size={sizes.p}
              color={colors.gray}
            />
            <Text style={styles.help}>Tip</Text>
          </View>
          <AntDesign
            name="staro"
            size={sizes.h4}
            style={{marginLeft: sizes.padding / 2}}
            color={colors.gray}
          />
        </View>
      </View>

      <Container>
        <SubHeading>My worry is about...</SubHeading>
        <TextInput
          value={worry}
          style={styles.input}
          onChangeText={e => setWorry(e)}
          placeholder="e.g. I won't be able to pay the bills"
          placeholderTextColor={colors.placeholder}
        />
      </Container>

      <Container>
        <SubHeading>Further information about my worry</SubHeading>
        <TextInput
          value={info}
          multiline
          style={[
            styles.input,
            {
              minHeight: sizes.height * 0.25,
              textAlignVertical: 'top',
              paddingVertical: sizes.padding,
            },
          ]}
          onChangeText={e => setInfo(e)}
          placeholder="You can write more details about your worry here if you think it will help(it's optional)."
          placeholderTextColor={colors.placeholder}
        />
      </Container>

      <Container>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Button
            active={worry.length}
            onPress={handleSave}
            text="Save my worry"
          />
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding * 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
