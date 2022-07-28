import React, {useEffect, useState} from 'react';
import {
  Alert,
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
import {colors} from '../constants/colors';
import FaceId from '../assets/svg/FaceId';
import Passcode from '../assets/svg/Passcode';
import TouchId from '../assets/svg/TouchId';

import TouchID from 'react-native-touch-id';
import {useDispatch} from 'react-redux';
import {authenticate} from '../redux/actions/auth';
import {showToast} from '../services/toast';

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
            <View style={styles.container}>
              <View style={styles.icon}>
                <Passcode />
              </View>

              <Text style={styles.label}>Use your</Text>
              <Text style={styles.label}>Phone's Passcode</Text>
            </View>
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
