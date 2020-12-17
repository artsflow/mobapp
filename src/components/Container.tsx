import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { Div } from 'react-native-magnus'

export function Container({ children, disableSafeArea = false, ...rest }: any) {
  const content = (
    <Div flex={1} bg="white" {...rest}>
      {children}
    </Div>
  )

  if (disableSafeArea) {
    return content
  }

  return <SafeAreaView style={{ flex: 1 }}>{content}</SafeAreaView>
}
