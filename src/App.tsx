import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from 'swr'
import * as Sentry from '@sentry/react-native'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactNativePlugin } from '@microsoft/applicationinsights-react-native'

import { client } from 'services/client'
import { Navigator } from './navigation'

export const fetcher = (query: string) => client.request(query)

Sentry.init({
  dsn: 'https://7f596b9fe4374bb4afd7e425b46a9c2e@o494579.ingest.sentry.io/5565940',
})

var RNPlugin = new ReactNativePlugin()
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '8a1e296e-8c14-4034-ad4a-c6b90d19bdc6',
    extensions: [RNPlugin],
  },
})
appInsights.loadAppInsights()

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
          <Navigator />
        </SafeAreaProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
