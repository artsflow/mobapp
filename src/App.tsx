import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Icon } from 'react-native-magnus'

import { ExploreScreen, SavedScreen, MessagesScreen, ProfileScreen } from 'screens'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={handleScreenOptions}
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
              labelStyle: {
                marginBottom: 10,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                backgroundColor: '#F0F0F0',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            }}
          >
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
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

    return <Icon name={name} fontFamily={fontFamily} color={color} fontSize="xl" />
  },
})

export default App
