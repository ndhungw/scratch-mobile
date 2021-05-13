import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// constants
import COLORS from '../constants/colors';
import SCREENS from '../constants/screenNames';

// icons
import LoupeIcon from '../assets/icons/loupe';
import FeedIcon from '../assets/icons/feed';
import ProfileIcon from '../assets/icons/profile';

// scenes
import LogInScreen from '../scenes/LogInScreen/LogInScreen';
import SignUpScreen from '../scenes/LogInScreen/LogInScreen';
import FeedVerticalScrollScreen from '../scenes/FeedScreen/FeedVerticalScrollScreen';
import FeedDetailsScreen from '../scenes/FeedDetailsScreen/FeedDetailsScreen';
import ProfileScreen from '../scenes/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../scenes/EditProfileScreen/EditProfileScreen';
// import SearchScreen fr"m '../scenes/SearchScreen/SearchScr"en';
import TestScreen from '../scenes/TestScreen/TestScreen';

const AuthStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FeedStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={SCREENS.LOGIN_SCREEN}
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={SCREENS.SIGNUP_SCREEN}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      {/* <SearchStack.Screen
        name={SCREENS.SEARCH_SCREEN}
        component={SearchScreen}
        options={{ headerShown: false }}
      /> */}
      <SearchStack.Screen
        name={SCREENS.TEST_SCREEN}
        component={TestScreen}
        // options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}

function FeedStackNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name={SCREENS.FEED_VERTICAL_SCROLL_SCREEN}
        component={FeedVerticalScrollScreen}
        options={{ headerShown: false }}
      />
      <FeedStack.Screen name={SCREENS.FEED_DETAILS_SCREEN} component={FeedDetailsScreen} />
    </FeedStack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={SCREENS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={SCREENS.EDIT_PROFILE_SCREEN}
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

function TabStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({
          focused,
          // , color, size
        }) => {
          let renderIcon;

          if (route.name === SCREENS.SEARCH_SCREEN) {
            renderIcon = focused ? <LoupeIcon stroke={COLORS.DarkGreen} /> : <LoupeIcon />;
          } else if (route.name === SCREENS.FEED_VERTICAL_SCROLL_SCREEN) {
            renderIcon = focused ? <FeedIcon stroke={COLORS.DarkGreen} /> : <FeedIcon />;
          } else if (route.name === SCREENS.PROFILE_SCREEN) {
            renderIcon = focused ? <ProfileIcon stroke={COLORS.DarkGreen} /> : <ProfileIcon />;
          }

          return renderIcon;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.DarkGreen,
        inactiveTintColor: COLORS.DarkGrey,
        style: { borderTopWidth: 0 },
      }}>
      <Tab.Screen name={SCREENS.SEARCH_SCREEN} component={SearchStackNavigator} />
      <Tab.Screen name={SCREENS.FEED_VERTICAL_SCROLL_SCREEN} component={FeedStackNavigator} />
      <Tab.Screen name={SCREENS.PROFILE_SCREEN} component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

export { TabStackNavigator, AuthStackNavigator };
