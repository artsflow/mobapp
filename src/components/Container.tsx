import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
}

export function Container({ children, ...rest }: Props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
      {...rest}
    >
      {children}
    </SafeAreaView>
  )
}
