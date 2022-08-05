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
    case 'addAWorry':
      return require('../constants/tips/addAWorry.json');
    case 'unsortedWorry':
      return require('../constants/tips/unsortedWorry.json');
    default:
      return require('../constants/tips/worryTime.json');
  }
};

export default function Tips({route}) {
  // Change data according to type (ex: type coudld be 'worryTimes', 'worryPlace', 'sortMyWorry', 'solveMyWorry', 'addWorry')
  const {type} = route && route.params ? route.params : {};
  const data = getData(type);
  return type === 'sortMyWorry' ? (
    <SortMyWorry />
  ) : type === 'solve' ? (
    <Solve />
  ) : (
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

const SortMyWorry = () => (
  <ScrollView style={styles.screen}>
    <Screen>
      <Heading color={colors.primary}>Sort my worry</Heading>
      <Container marginVertical={sizes.padding / 2}>
        <Label color={colors.text}>
          Make the best use of your Worry Time by sorting your worry into one of
          these categories:
        </Label>
      </Container>

      <Container>
        <SubHeading color={colors.secondary}>Solvable</SubHeading>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            Worries that you can do something about include problems you can
            solve, things you can change & situations you have some control
            over.
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>Let's control the controllable, hey?</Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            These could be disagreements, deadlines, health issues, or the
            bills, there's always the bills…
          </Text>
        </Container>
      </Container>

      <Container>
        <SubHeading color={colors.secondary}>Unsolvable</SubHeading>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            Worries you can't do something about because they are:
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Label style={styles.text}>• Out of your control </Label>
          <Text style={styles.italicText}>“What if the plane crashes!?”</Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Label style={styles.text}>
            • Things you can't change because they happened in the past
          </Label>
          <Text style={styles.italicText}>
            “I really put my foot in my mouth 5 years ago, she probably still
            hates me!”
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Label style={styles.text}>• They are too vague </Label>
          <Text style={styles.italicText}>
            “Something bad is going to happen.””
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Label style={styles.text}>
            • Or your worries are about things that could happen but part of you
            knows that they are unlikely or unrealistic
          </Label>
          <Text style={styles.italicText}>
            “If I quit, I'll never find another job!”
          </Text>
        </Container>
      </Container>

      <Container>
        <SubHeading color={colors.secondary}>Unsure</SubHeading>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            If you’re unsure, that’s completely fine.
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            The worry will automatically go into the Solvable list.
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            You can sort your worries into another list at any time by using the
            editing function.
          </Text>
        </Container>
      </Container>

      <Container>
        <SubHeading color={colors.secondary}>Solved</SubHeading>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            Worries that are no longer issues—either they resolve themselves or
            they are no longer important.
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            Now these ones you can put to bed! Here's one:{' '}
            <Text style={{fontStyle: 'italic'}}>
              “If I say no to her, she won't want to be my friend.”
            </Text>{' '}
            But you did say no (go you!) and it turned out fine.
          </Text>
        </Container>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            <Text style={{fontWeight: 'bold'}}>Fun Fact:</Text> 85% of what we
            worry about never happens (phew!). Imagine how much time you’ll save
            just by containing your worry until Worry Time!
          </Text>
        </Container>
      </Container>
    </Screen>
  </ScrollView>
);

const Solve = () => (
  <ScrollView style={styles.screen}>
    <Screen>
      <SubHeading color={colors.primary}>Solve</SubHeading>
      <Container>
        <Label color={colors.text}>
          Worries can help you solve your problems.
        </Label>
        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            If your worry is solvable, focus on finding solutions and making a
            plan to implement it using the following steps:
          </Text>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Label color={colors.text}>
            Step 1:{' '}
            <Label style={{color: colors.gray}}>Brainstorm solutions </Label>
          </Label>
          <Label color={colors.text}>
            Step 2:{' '}
            <Label style={{color: colors.gray}}>
              Evaluate solutions then consider the top two or three in detail
            </Label>
          </Label>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            Do a pros and cons list, consider if this is something you're
            capable of doing right now.
          </Text>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Label color={colors.text}>
            Step 3:{' '}
            <Label style={{color: colors.gray}}>
              Choose the solution you think will work best and is most realistic
            </Label>
          </Label>
          <Label color={colors.text}>
            Step 4:{' '}
            <Label style={{color: colors.gray}}>
              Create a step-by-step plan to carry out your solution
            </Label>
          </Label>
          <Label color={colors.text}>
            Step 5: <Label style={{color: colors.gray}}>Take action</Label>
          </Label>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.text}>
            People often delay or avoid taking action or making decisions
            because they are worried about making a mistake.
          </Text>
          <Text style={styles.text}>
            The truth is you could, but the important thing to remember is that
            whatever happens you will be able to deal with it. Get those mistake
            muscles strong!
          </Text>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Label color={colors.text}>
            Step 6: <Label style={{color: colors.gray}}>Review</Label>
          </Label>
          <Text style={styles.text}>If your solution worked, great!</Text>
          <Text style={styles.text}>
            And if not, use what you learned from the process & ask yourself:
          </Text>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Text style={styles.italicText}>
            • Is this actually solvable right now?
          </Text>
          <Text style={styles.italicText}>
            • Are there other possible solutions I didn’t consider before?
          </Text>
          <Text style={styles.italicText}>
            • Do I want to try to solve it another way?
          </Text>
          <Text style={styles.italicText}>• Do I need to ask for help?</Text>
          <Text style={styles.text}>
            Let your answers to these questions guide your next steps.
          </Text>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Label color={colors.text}>
            Step 7:{' '}
            <Label style={{color: colors.gray}}>
              Reward yourself (You deserve it!)
            </Label>
          </Label>
        </Container>

        <Container marginVertical={sizes.padding / 2}>
          <Text style={[styles.italicText, {fontWeight: 'bold'}]}>
            Solve more, worry less.
          </Text>
        </Container>
      </Container>
    </Screen>
  </ScrollView>
);

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
  italicText: {
    color: colors.text,
    fontSize: sizes.h5,
    fontStyle: 'italic',
    marginLeft: sizes.padding / 2,
  },
});
