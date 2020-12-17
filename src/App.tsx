import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationProvider } from 'react-native-navigation-hooks'
import { SWRConfig } from 'swr'

import { client } from 'services/client'

export const fetcher = (query: string) => client.request(query)

const App = (Component: any) => (props: any) => {
  return (
    <ThemeProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher,
        }}
      >
        <SafeAreaProvider>
          <NavigationProvider value={{ componentId: props.componentId }}>
            <Component {...props} />
          </NavigationProvider>
        </SafeAreaProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
