import * as React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Div } from 'react-native-magnus'

export function Container({ children, ...rest }: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
      }}
    >
      <Div {...rest}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {children}
      </Div>
    </SafeAreaView>
  )
}
