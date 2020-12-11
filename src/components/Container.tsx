import * as React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { Div } from 'react-native-magnus'

export function Container({ children, disableSafeArea = false, ...rest }: any) {
  const content = (
    <Div flex={1} bg="white" {...rest}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {children}
    </Div>
  )

  if (disableSafeArea) {
    return content
  }

  return <SafeAreaView style={{ flex: 1 }}>{content}</SafeAreaView>
}
