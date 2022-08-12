import React, {useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Label from '../components/Label';
import Paragraph from '../components/Paragraph';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {storeString} from '../services/store';
import {useDispatch, useSelector} from 'react-redux';
import {authenticate} from '../redux/actions/auth';

const screens = [
  {
    title: 'Welcome!',
    description:
      "Contain Your Brain is the app that helps you spend less time worrying about your life \n and more time living it. \n Not only does our method work, \n it's easy to use!",
  },
  {
    title: 'Choose a Worry Time',
    description:
      'Choose the most convenient and \n productive time in the day for you to focus \n on your worries.',
  },
  {
    title: 'Choose a Worry Place',
    description:
      "Once you've organized your worry time, \n decide where is the best place for you to worry. \n Pick a place that you have access to everyday, most likely a space in your house, \n but not your bedroom.",
  },
  {
    title: 'Add your Worries',
    description:
      'Whenever a worry pops up, contain your brain by adding your worry into the app. \n You can add as little or as much detail as you like; do whatever works best for you. Highlight the ones you want to focus on the most.',
  },
  {
    title: 'Worry Time!',
    description:
      "Now it's time to worry when and where \n it suits you most! \n Simply click on the worry you want to focus on & use the Contain Your Brain method to \n organise & address your worry effectively.",
  },
  {
    title: 'Worry Tips',
    description:
      "Use our clinical psychologist's tips to help you choose the best way to approach your worry \n and then SOLVE, ACCEPT or REFLECT your way to worrying less & living more!",
  },
  {
    title: 'Your Worries are Safe!',
    description:
      "And don't worry about your worries,they are all safely stored directly on your phone and can only be securely accessed by you. \n No account sign-up or Internet access is required. Access is via your fingerprint or passcode only.",
  },
];

export default function Welcome() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {authentication} = useSelector(state => state.auth);

  const handleSkip = async () => {
    dispatch(
      authenticate({
        ...authentication,
        notFirstTime: true,
      }),
    );
    await storeString('notFirstTime', 'true');
  };

  return (
    <>
      <Header vertical />
      <View style={styles.screen}>
        <Carousel
          ref={ref}
          style={{marginTop: sizes.height * 0.05}}
          width={sizes.width}
          height={sizes.height * 0.75}
          data={screens}
          renderItem={renderItem}
          pagingEnabled
          onSnapToItem={e => setCurrentIndex(e)}
        />
        <View style={styles.row}>
          <Fontisto
            name="arrow-left"
            color={currentIndex !== 0 ? colors.primary : colors.gray}
            size={sizes.icon / 2}
            onPress={() =>
              currentIndex !== 0 &&
              ref.current.scrollTo({count: -1, animated: true})
            }
          />
          <View style={styles.dotContainer}>
            {screens.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index && {backgroundColor: colors.primary},
                ]}
              />
            ))}
          </View>
          <Fontisto
            name="arrow-right"
            color={currentIndex !== 6 ? colors.primary : colors.gray}
            size={sizes.icon / 2}
            onPress={() =>
              currentIndex !== 6
                ? ref.current.scrollTo({count: 1, animated: true})
                : handleSkip
            }
          />
        </View>

        <TouchableOpacity
          onPress={handleSkip}
          style={{marginTop: sizes.padding}}>
          <Label color={colors.primary}>Skip</Label>
        </TouchableOpacity>
      </View>
    </>
  );
}

const getImage = index => {
  switch (index) {
    case 0:
      return require(`../assets/illustrations/welcome/1.png`);
    case 1:
      return require(`../assets/illustrations/welcome/2.png`);
    case 2:
      return require(`../assets/illustrations/welcome/3.png`);
    case 3:
      return require(`../assets/illustrations/welcome/4.png`);
    case 4:
      return require(`../assets/illustrations/welcome/5.png`);
    case 5:
      return require(`../assets/illustrations/welcome/6.png`);
    case 6:
      return require(`../assets/illustrations/welcome/7.png`);
  }
};

const renderItem = ({item, index}) => (
  <View style={styles.tile}>
    <Image style={styles.image} resizeMode="contain" source={getImage(index)} />
    <View style={[styles.tile, {marginTop: sizes.padding * 2}]}>
      <Heading
        color={colors.text}
        style={{marginHorizontal: sizes.padding / 2}}>
        {item.title}
      </Heading>
      <View style={{marginTop: sizes.padding}}>
        <Paragraph
          style={{
            textAlign: 'center',
            lineHeight: sizes.h3,
            marginHorizontal: sizes.padding * 2,
          }}
          color={colors.text}>
          {item.description}
        </Paragraph>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  tile: {
    width: sizes.width,
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: sizes.width,
    height: sizes.height * 0.3,
  },
  row: {
    flexDirection: 'row',
  },
  dotContainer: {
    width: sizes.width * 0.7,
    paddingHorizontal: sizes.padding * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
