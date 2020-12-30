import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from 'swr'
import * as Sentry from '@sentry/react-native'
import { NavigationContainer } from '@react-navigation/native'

import { client } from 'services/client'
import { TabNavigator } from './navigation/Tabs'

export const fetcher = (query: string) => client.request(query)

Sentry.init({
  dsn: 'https://7f596b9fe4374bb4afd7e425b46a9c2e@o494579.ingest.sentry.io/5565940',
})

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
            <TabNavigator />
          </SafeAreaProvider>
        </SWRConfig>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
