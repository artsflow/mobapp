import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icon } from 'react-native-magnus'

import { ExploreScreen, SavedScreen, MessagesScreen, ProfileScreen } from 'screens'

const TAB_HEIGHT = 75
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

const TabNavigator = () => {
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
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const handleScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ color }: any) => {
    let name = ''
    let fontFamily: any

    switch (route.name) {
      case 'Explore':
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

export default App
