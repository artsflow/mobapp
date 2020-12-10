import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const ExploreStack = createStackNavigator()
const SavedStack = createStackNavigator()
const MessagesStack = createStackNavigator()
const ProfileStack = createStackNavigator()

import {
  ExploreScreen,
  ArtActivityScreen,
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

export function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator screenOptions={screenOptions}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="ArtActivity" component={ArtActivityScreen} />
      <ExploreStack.Screen name="ArtistProfile" component={ArtistProfileScreen} />
    </ExploreStack.Navigator>
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
