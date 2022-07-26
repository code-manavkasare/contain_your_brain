import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Heading from '../components/Heading';
import Screen from '../components/Screen';

import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';
import data from '../constants/tips.json';

export default function Tips({route}) {
  // Change data according to type (ex: type coudld be 'worryTimes', 'worryPlace', 'sortMyWorry', 'solveMyWorry', 'addWorry')
  const {type} = route && route.params ? route.params : {};
  return (
    <ScrollView style={styles.screen}>
      <Screen>
        <Heading>{data.heading}</Heading>
        <Container>
          <SubHeading>{data.heading1}</SubHeading>
          <SubHeading color={colors.secondary}>{data.heading2}</SubHeading>
          <Text style={[styles.text, {marginTop: 10}]}>{data.description}</Text>
        </Container>

        <Container>
          <SubHeading color={colors.text}>{data.heading3}</SubHeading>
          {data.points.map((item, index) => (
            <Text
              key={index}
              style={[styles.text, {marginLeft: sizes.padding}]}>
              • {item}
            </Text>
          ))}
        </Container>

        <Container>
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
  },
  text: {
    color: colors.text,
    fontSize: sizes.h5,
  },
});
