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

export const fetcher = (query: string) => client.request(query)

const TAB_HEIGHT = 75
const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
      screenOptions={handleScreenOptions}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {},
        tabStyle: {
          paddingVertical: 15,
        },
        style: {
          backgroundColor: '#F0F0F0',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: TAB_HEIGHT + insets.bottom,
        },
      }}
    >
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
  tabBarIcon: ({ color }: any) => {
    let name = ''
    let fontFamily: any

    switch (route.name) {
      case 'Activities':
        name = 'explore'
        fontFamily = 'MaterialIcons'

        break
      case 'Saved':
        name = 'heart'
        fontFamily = 'SimpleLineIcons'

        break
      case 'Messages':
        name = 'message1'
        fontFamily = 'AntDesign'

        break
      case 'Profile':
        name = 'user-circle'
        fontFamily = 'FontAwesome'

        break
    }

    return <Icon name={name} fontFamily={fontFamily} color={color} fontSize={24} />
  },
})
