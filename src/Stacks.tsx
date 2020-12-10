import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const ActivitiesStack = createStackNavigator()
const SavedStack = createStackNavigator()
const MessagesStack = createStackNavigator()
const ProfileStack = createStackNavigator()

import {
  ActivitiesScreen,
  ActivityScreen,
  ArtistProfileScreen,
  SavedScreen,
  MessagesScreen,
  ProfileScreen,
} from 'screens'

const screenOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
}

export function ActivitiesStackScreen() {
  return (
    <ActivitiesStack.Navigator screenOptions={screenOptions}>
      <ActivitiesStack.Screen name="Activities" component={ActivitiesScreen} />
      <ActivitiesStack.Screen name="Activity" component={ActivityScreen} />
      <ActivitiesStack.Screen
        name="ArtistProfile"
        options={{ title: 'Artist Profile' }}
        component={ArtistProfileScreen}
      />
    </ActivitiesStack.Navigator>
  )
}

export function SavedStackScreen() {
  return (
    <SavedStack.Navigator screenOptions={screenOptions}>
      <SavedStack.Screen name="Saved" component={SavedScreen} />
    </SavedStack.Navigator>
  )
}

export function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator screenOptions={screenOptions}>
      <MessagesStack.Screen name="Messages" component={MessagesScreen} />
    </MessagesStack.Navigator>
  )
}

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}
