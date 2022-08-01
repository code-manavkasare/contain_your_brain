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
import TouchId from '../assets/svg/TouchId';
import {colors} from '../constants/colors';

import TouchID from 'react-native-touch-id';

import {useDispatch} from 'react-redux';
import {authenticate} from '../redux/actions/auth';
import {showToast} from '../services/toast';
import {getString} from '../services/store';

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
        if (biometryType === 'FaceID') {
          setFaceIdSupported(true);
        } else {
          setTouchIdSupported(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAuthenticate = () => {
    const optionalConfigObject = {
      title: 'Authentication Required',
      imageColor: colors.primary,
      imageErrorColor: colors.tertiary,
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: 'Failed',
      cancelText: 'Cancel',
      fallbackLabel: 'Show Passcode',
      unifiedErrors: false,
      passcodeFallback: false,
    };

    TouchID.authenticate(
      'Authenticate to Contain Your Brain',
      optionalConfigObject,
    )
      .then(async success => {
        const notFirstTime = await getString('notFirstTime');
        if (notFirstTime) {
          dispatch(
            authenticate({
              type: faceIdSupported ? 'face' : 'touch',
              notFirstTime: true,
            }),
          );
        } else {
          dispatch(
            authenticate({
              type: faceIdSupported ? 'face' : 'touch',
              notFirstTime: false,
            }),
          );
        }
        showToast('success', 'Success', 'Authenticated successfully!');
      })
      .catch(error => {
        if (Platform.OS === 'ios') {
          if (error.name === 'LAErrorUserCancel') return;
          return showToast('success', 'Error', error.message);
        } else {
          if (error.code === 'AUTHENTICATION_CANCELED') return;
          return showToast('success', 'Error', error.message);
        }
      });
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
            <TouchableWithoutFeedback
              disabled={!faceIdSupported}
              onPress={handleAuthenticate}>
              <View style={styles.container}>
                <View style={styles.icon}>
                  <FaceId color={!faceIdSupported && colors.tertiary} />
                </View>
                {faceIdSupported ? (
                  <>
                    <Text style={styles.label}>Use</Text>
                    <Text style={styles.label}>Face Recognition</Text>
                  </>
                ) : (
                  <Text style={[styles.label, {color: colors.tertiary}]}>
                    Not available
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleAuthenticate}>
              <View style={styles.container}>
                <View style={styles.icon}>
                  <TouchId color={!touchIdSupported && colors.tertiary} />
                </View>
                {touchIdSupported ? (
                  <>
                    <Text style={styles.label}>Use</Text>
                    <Text style={styles.label}>Fingerprint sensor</Text>
                  </>
                ) : (
                  <Text style={[styles.label, {color: colors.tertiary}]}>
                    Not available
                  </Text>
                )}
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
