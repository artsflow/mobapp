import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from 'swr'

import { client } from 'services/client'

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
        <SafeAreaProvider />
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
