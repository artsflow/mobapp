import * as React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { Div } from 'react-native-magnus'

export function Container({ children, ...rest }: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
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
