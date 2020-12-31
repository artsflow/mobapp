import 'react-native-gesture-handler'
import * as React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icon } from 'react-native-magnus'

import {
  ActivitiesStackScreen,
  SavedStackScreen,
  MessagesStackScreen,
  ProfileStackScreen,
} from './Stacks'
import { client } from 'services/client'

import { ActivitiesIcon, MessagesIcon, SavedIcon } from './icons'

export const fetcher = (query: string) => client.request(query)

const TAB_HEIGHT = 65
const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  const insets = useSafeAreaInsets()

  const tabBarOptions = {
    activeTintColor: '#1D1D26',
    inactiveTintColor: '#bbbbbe',
    tabStyle: {
      paddingTop: 15,
      paddingBottom: 10,
    },
    labelStyle: {
      marginTop: 8,
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
      height: TAB_HEIGHT + insets.bottom,
    },
  }

  return (
    <Tab.Navigator screenOptions={handleScreenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Activities" component={ActivitiesStackScreen} options={handleOptions} />
      <Tab.Screen name="Saved" component={SavedStackScreen} />
      <Tab.Screen name="Messages" component={MessagesStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

const handleOptions = ({ route }: any) => ({
  tabBarVisible: getTabBarVisibility(route),
})

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route)

  if (routeName === 'Activity') {
    return false
  }

  return true
}

const handleScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ color, focused }: any) => {
    switch (route.name) {
      case 'Activities':
        return <ActivitiesIcon focused={focused} />
      case 'Saved':
        return <SavedIcon focused={focused} />
      case 'Messages':
        return <MessagesIcon focused={focused} />
      case 'Profile':
        return (
          <Icon
            name="user-circle"
            fontFamily="FontAwesome"
            color={focused ? '#47BCC8' : color}
            fontSize={22}
          />
        )
      default:
        return null
    }
  },
})
