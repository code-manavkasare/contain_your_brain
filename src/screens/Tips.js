import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Heading from '../components/Heading';
import Screen from '../components/Screen';

import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import Label from '../components/Label';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

const getData = type => {
  switch (type) {
    case 'worryTime':
      return require('../constants/tips/worryTime.json');
    case 'worryPlace':
      return require('../constants/tips/worryPlace.json');
    default:
      return require('../constants/tips/worryTime.json');
  }
};

export default function Tips({route}) {
  // Change data according to type (ex: type coudld be 'worryTimes', 'worryPlace', 'sortMyWorry', 'solveMyWorry', 'addWorry')
  const {type} = route && route.params ? route.params : {};
  const data = getData(type);
  return (
    <ScrollView style={styles.screen}>
      <Screen>
        <Heading color={colors.primary}>{data.heading}</Heading>
        <Container marginVertical={sizes.padding / 2}>
          <Label color={colors.text}>{data.subheading}</Label>
          {data.paragraphs.map((item, index) => (
            <Container marginVertical={sizes.padding / 2}>
              <Text key={index} style={styles.text}>
                {item}
              </Text>
            </Container>
          ))}
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <SubHeading color={colors.text}>{data.heading3}</SubHeading>
          <Text style={[styles.text, {marginTop: 10}]}>{data.description}</Text>
        </Container>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: sizes.padding / 2,
  },
  text: {
    color: colors.text,
    fontSize: sizes.h5,
  },
});
