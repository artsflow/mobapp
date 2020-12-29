import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from 'swr'
import * as Sentry from '@sentry/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { client } from 'services/client'
import { ActivitiesScreen, MessagesScreen, ProfileScreen, SavedScreen } from 'screens'

export const fetcher = (query: string) => client.request(query)

Sentry.init({
  dsn: 'https://7f596b9fe4374bb4afd7e425b46a9c2e@o494579.ingest.sentry.io/5565940',
})

const ActivitiesStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const ActivitiesStackScreen = () => (
  <ActivitiesStack.Navigator>
    <ActivitiesStack.Screen name="Activities" component={ActivitiesScreen} />
  </ActivitiesStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            fetcher,
          }}
        >
          <SafeAreaProvider>
            <Tab.Navigator>
              <Tab.Screen name="Activities" component={ActivitiesStackScreen} />
              <Tab.Screen name="Saved" component={SavedScreen} />
              <Tab.Screen name="Messages" component={MessagesScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </SafeAreaProvider>
        </SWRConfig>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
