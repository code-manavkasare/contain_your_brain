import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';
import {AddWorry, Home, Tips} from '../screens';
import Worries from '../navigation/WorriesStack';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SetupStack from './SetupStack';
import Header from '../components/Header';
import {View} from 'react-native';
import AddWorryStack from './AddWorryStack';
import BigHeader from '../components/BigHeader';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.card,
          height: 102,
          shadowOpacity: 1,
          shadowColor: '#000',
          borderTopWidth: 0,
          elevation: 10,
        },
        headerStyle: {
          backgroundColor: colors.card,
        },
        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.primary,
        tabBarLabelStyle: {marginBottom: sizes.padding, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <BigHeader />,
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Worries"
        component={Worries}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Fontisto
              name="file-1"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddWorry"
        component={AddWorryStack}
        options={{
          tabBarLabelStyle: {
            color: colors.secondary,
            marginBottom: sizes.padding * 2,
            fontWeight: 'bold',
          },
          headerShown: false,
          tabBarLabel: 'Add a Worry',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 88,
                height: 87,
                borderRadius: 44,
                backgroundColor: colors.background,
                marginTop: -sizes.padding * 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name="plus-circle"
                color={focused ? colors.tertiary : colors.secondary}
                size={sizes.icon * 2}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={Tips}
        options={{
          header: () => <Header showBack />,
          tabBarIcon: ({focused}) => (
            <Feather
              name="info"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setup"
        component={SetupStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Feather
              name="settings"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const a = {
  DataProvider: {
    WebsiteURL: 'http://openchargemap.org',
    Comments: null,
    DataProviderStatusType: {
      IsProviderEnabled: true,
      ID: 1,
      description: 'Manual Data Entry',
    },
    IsRestrictedEdit: false,
    IsOpenDataLicensed: true,
    IsApprovedImport: true,
    License:
      'Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    DateLastImported: null,
    ID: 1,
    description: 'Open Charge Map Contributors',
  },
  OperatorInfo: {
    WebsiteURL: 'https://www.afconev.co.il/',
    Comments: null,
    PhonePrimaryContact: null,
    PhoneSecondaryContact: null,
    IsPrivateIndividual: false,
    AddressInfo: null,
    BookingURL: null,
    ContactEmail: null,
    FaultReportEmail: null,
    IsRestrictedEdit: false,
    ID: 3435,
    description: 'Afcon (Israel)',
  },
  UsageType: {
    IsPayAtLocation: false,
    IsMembershipRequired: true,
    IsAccessKeyRequired: true,
    ID: 4,
    description: 'Public - Membership Required',
  },
  StatusType: {
    IsOperational: true,
    IsUserSelectable: true,
    ID: 50,
    description: 'Operational',
  },
  SubmissionStatus: {
    IsLive: true,
    ID: 200,
    description: 'Submission Published',
  },
  UserComments: null,
  PercentageSimilarity: null,
  MediaItems: null,
  IsRecentlyVerified: true,
  DateLastVerified: '2021-11-07T16:36:00Z',
  ID: 189853,
  UUID: '1686CE5C-95E8-450B-93C3-95D1B1AF98D4',
  ParentChargePointID: null,
  DataProviderID: 1,
  DataProvidersReference: null,
  OperatorID: 3435,
  OperatorsReference: null,
  UsageTypeID: 4,
  UsageCost: null,
  AddressInfo: {
    ID: 190212,
    description: 'בית משה',
    AddressLine1: 'כצנלסון 10',
    AddressLine2: null,
    Town: 'Ashkelon',
    StateOrProvince: 'South District',
    Postcode: '78100',
    CountryID: 111,
    Country: {
      ISOCode: 'IL',
      ContinentCode: 'AS',
      ID: 111,
      description: 'Israel',
    },
    Latitude: 31.66148706692408,
    Longitude: 34.587748089749425,
    ContactTelephone1: null,
    ContactTelephone2: null,
    ContactEmail: null,
    AccessComments: null,
    RelatedURL:
      'https://account.afconev.co.il/findCharger?31.6615343,34.5873913,20z,%D7%9B%D7%A6%D7%A0%D7%9C%D7%A1%D7%95%D7%9F%2010%20%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F,494si',
    Distance: null,
    DistanceUnit: 0,
  },
  Connections: [
    {
      ID: 307235,
      ConnectionTypeID: 25,
      ConnectionType: {
        FormalName: 'IEC 62196-2 Type 2',
        IsDiscontinued: false,
        IsObsolete: false,
        ID: 25,
        description: 'Type 2 (Socket Only)',
      },
      Reference: null,
      StatusTypeID: 50,
      StatusType: {
        IsOperational: true,
        IsUserSelectable: true,
        ID: 50,
        description: 'Operational',
      },
      LevelID: 2,
      Level: {
        Comments: 'Over 2 kW, usually non-domestic socket type',
        IsFastChargeCapable: false,
        ID: 2,
        description: 'Level 2 : Medium (Over 2kW)',
      },
      Amps: null,
      Voltage: null,
      PowerKW: 22,
      CurrentTypeID: 20,
      CurrentType: {
        Description: 'Alternating Current - Three Phase',
        ID: 20,
        description: 'AC (Three-Phase)',
      },
      Quantity: 3,
      Comments: null,
    },
    {
      ID: 307236,
      ConnectionTypeID: 33,
      ConnectionType: {
        FormalName: 'IEC 62196-3 Configuration FF',
        IsDiscontinued: false,
        IsObsolete: false,
        ID: 33,
        description: 'CCS (Type 2)',
      },
      Reference: null,
      StatusTypeID: 50,
      StatusType: {
        IsOperational: true,
        IsUserSelectable: true,
        ID: 50,
        description: 'Operational',
      },
      LevelID: 3,
      Level: {
        Comments: '40KW and Higher',
        IsFastChargeCapable: true,
        ID: 3,
        description: 'Level 3:  High (Over 40kW)',
      },
      Amps: null,
      Voltage: null,
      PowerKW: 50,
      CurrentTypeID: 30,
      CurrentType: {
        Description: 'Direct Current',
        ID: 30,
        description: 'DC',
      },
      Quantity: 1,
      Comments: null,
    },
  ],
  NumberOfPoints: 4,
  GeneralComments: null,
  DatePlanned: null,
  DateLastConfirmed: null,
  StatusTypeID: 50,
  DateLastStatusUpdate: '2021-11-07T16:36:00Z',
  MetadataValues: null,
  DataQualityLevel: 1,
  DateCreated: '2021-11-07T16:36:00Z',
  SubmissionStatusTypeID: 200,
};
