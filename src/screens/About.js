import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Label from '../components/Label';
import Paragraph from '../components/Paragraph';
import Screen from '../components/Screen';
import SubHeading from '../components/SubHeading';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';

export default function About() {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={{paddingBottom: sizes.padding * 4}}
        style={styles.screen}>
        <Heading>About Contain your Brain</Heading>
        <Container>
          <Label color={colors.text}>
            Contain Your Brain is the app that helps you spend less time
            worrying about your life and more time living it!
          </Label>
        </Container>

        <Container>
          <Paragraph style={{marginBottom: sizes.padding / 2}}>
            Worries are… well, worrying! The fact is worries are part of life
            and they have a purpose: to alert us to potential problems so we can
            solve them.
          </Paragraph>
          <Paragraph style={{marginBottom: sizes.padding / 2}}>
            But if you are worrying more than solving, or you’re stuck in a
            rumination cycle with worries you can’t solve–then it’s time to find
            another way.
          </Paragraph>
          <Paragraph style={{marginBottom: sizes.padding / 2}}>
            Contain Your Brain is about creating boundaries for your worries &
            then using your worry time effectively with simple steps to keep
            your brain in check: SORT, SOLVE, ACCEPT & REFLECT.
          </Paragraph>
          <Paragraph style={{marginBottom: sizes.padding / 2}}>
            Learn to satisfy your brain’s need to worry—but when and where it
            suits YOU most. Before you know it, you’ll be containing your worry
            time to less that 30 minutes a day! Imagine what you can do with all
            your extra mind time!
          </Paragraph>
          <Paragraph style={{marginBottom: sizes.padding / 2}}>
            Worry less so you can live more!
          </Paragraph>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Publishers</SubHeading>
          <Paragraph
            style={{marginBottom: sizes.padding / 2}}
            color={colors.text}>
            Contain Your Brain is a collaboration between clinical psychologist,
            Dr. Lillian Nejad & Brenton Cannizzaro, digital design consultant
            (and worrier extraordinaire!).
          </Paragraph>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://containyourbrain.com/about')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              Find out more about our story.
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Follow us Online</SubHeading>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://containyourbrain.com/')}>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              containyourbrain.com
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/containyourbrain')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              instagram.com/containyourbrain
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/company/contain-your-brain/',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              linkedin.com/company/contain-your-brain
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Contact us</SubHeading>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto://hello@containyourbrain.com')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              hello@containyourbrain.com
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>
            Tell us what you think!
          </SubHeading>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://containyourbrain.com/get-in-touch')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              containyourbrain.com/get-in-touch
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Credits</SubHeading>
          <Label
            style={{
              marginTop: sizes.padding,
              marginBottom: sizes.padding / 2,
            }}
            color={colors.text}>
            App Developer
          </Label>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://avanttech.com.au/')}>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              Avant Tech
            </Paragraph>
          </TouchableOpacity>
          <Label
            style={{
              marginTop: sizes.padding,
              marginBottom: sizes.padding / 2,
            }}
            color={colors.text}>
            Business Development
          </Label>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/alice-armitage-26a55b148?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbgVuECphTb2DgFsAId6w%2Bw%3D%3D',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              Alice Armitage
            </Paragraph>
          </TouchableOpacity>
          <Label
            style={{
              marginTop: sizes.padding,
              marginBottom: sizes.padding / 2,
            }}
            color={colors.text}>
            Advisory
          </Label>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/sgindidis/')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              Simone Gindidis
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <Label
            style={{
              marginBottom: sizes.padding / 2,
            }}
            color={colors.text}>
            Visual design assets utilized under CC 4.0
          </Label>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/community/file/1098184085015891269',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              Figma UI KIT by RAHUL PAWAR
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/community/file/984106517828363349',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              iOS 15 UI Kit for Figma by Joey Banks
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/community/file/771480977055544485',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              Google Pixel 4 Mockup By Eliezer Pujols
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://ui4free.com/icons/figma-icon-free-pack-1300-icons.htm',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              Figma Icon Free Pack 1300+ icons by Temitope Lajumoke
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/community/file/1097231648066030341',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              93 shadow examples for your project by Aleksandr Gussev
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/community/file/1007831504631681780',
              )
            }>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              Apple and Android Biometric Icons: Face ID Touch ID Fingerprint by
              Andrzej
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://icons8.com/illustrations')}>
            <Paragraph
              style={{textDecorationLine: 'underline', marginBottom: 10}}
              color={colors.primary}>
              OUCH illustrations by Icons8
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Terms & Conditions </SubHeading>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://containyourbrain.com/terms')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              containyourbrain.com/terms
            </Paragraph>
          </TouchableOpacity>
        </Container>

        <Container>
          <SubHeading color={colors.primary}>Privacy Policy</SubHeading>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://containyourbrain.com/privacy')
            }>
            <Paragraph
              style={{textDecorationLine: 'underline'}}
              color={colors.primary}>
              containyourbrain.com/privacy
            </Paragraph>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding,
  },
});
