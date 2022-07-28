import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Screen from '../components/Screen';
import {sizes} from '../constants/sizes';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FaceId from '../assets/svg/FaceId';
import Passcode from '../assets/svg/Passcode';
import TouchId from '../assets/svg/TouchId';
import {colors} from '../constants/colors';

import TouchID from 'react-native-touch-id';

import {useDispatch} from 'react-redux';
import {authenticate} from '../redux/actions/auth';
import {showToast} from '../services/toast';

import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

export default function Onboard() {
  const dispatch = useDispatch();
  const [touchIdSupported, setTouchIdSupported] = useState('');
  const [faceIdSupported, setFaceIdSupported] = useState('');

  useEffect(() => {
    getSupport();
  }, []);

  const getSupport = async () => {
    const optionalConfigObject = {
      unifiedErrors: false,
      passcodeFallback: true,
    };

    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        console.log(biometryType);
        if (biometryType === 'FaceID') {
          setFaceIdSupported(true);
        } else {
          setTouchIdSupported(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
    // const {biometryType} = await rnBiometrics.isSensorAvailable();
    // console.log(biometryType);
  };

  const handleAuthenticate = () => {
    const optionalConfigObject = {
      title: 'Authentication Required',
      imageColor: colors.primary,
      imageErrorColor: colors.primary,
      sensorDescription: 'Touch sensor',
      cancelText: 'Cancel',
      unifiedErrors: false,
      passcodeFallback: true,
    };

    TouchID.authenticate(
      'Authenticate to Contain Your Brain',
      optionalConfigObject,
    )
      .then(success => {
        dispatch(
          authenticate({
            type: faceIdSupported ? 'face' : 'touch',
          }),
          showToast('success', 'Success', 'Authenticated successfully!'),
        );
      })
      .catch(error => {
        console.log('error authenticating', error);
        if (Platform.OS === 'ios') {
          if (error.name === 'LAErrorUserCancel') return;
          return showToast('success', 'Error', error.message);
        } else {
          if (error.code === 'AUTHENTICATION_CANCELED') return;
          return showToast('success', 'Error', error.message);
        }
      });
  };

  const handlePasscode = () => {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
    // PasscodeAuth.authenticate('to demo this react-native component')
    //   .then(success => {
    //     // Success code
    //     console.log(success);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // Failure code
    //   });
  };

  return (
    <Screen>
      <View style={styles.screen}>
        <Image
          style={styles.logo}
          source={require('../assets/vertical-logo.png')}
          resizeMode="contain"
        />
        <View>
          <View style={[styles.row, {alignSelf: 'center'}]}>
            <EvilIcons name="lock" color={colors.gray} size={sizes.icon} />
            <Text style={styles.label}>Securely open the app</Text>
          </View>
          <View
            style={[
              styles.row,
              {
                width: sizes.width,
                justifyContent: 'space-evenly',
                marginTop: sizes.padding * 3,
              },
            ]}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <FaceId />
              </View>
              <Text style={styles.label}>Use</Text>
              <Text style={styles.label}>Face Recognition</Text>
            </View>
            <TouchableWithoutFeedback onPress={handlePasscode}>
              <View style={styles.container}>
                <View style={styles.icon}>
                  <Passcode />
                </View>

                <Text style={styles.label}>Use your</Text>
                <Text style={styles.label}>Phone's Passcode</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleAuthenticate}>
              <View style={styles.container}>
                <View style={styles.icon}>
                  <TouchId />
                </View>
                <Text style={styles.label}>Use</Text>
                <Text style={styles.label}>Fingerprint sensor</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {
    height: sizes.height * 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginBottom: sizes.padding,
  },
  container: {
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: sizes.p,
  },
});
