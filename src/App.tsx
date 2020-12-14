import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from 'swr'

import { client } from 'services/client'
import { TabNavigator } from './Tabs'

export const fetcher = (query: string) => client.request(query)

const App = () => {
  return (
    <ThemeProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher,
        }}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
