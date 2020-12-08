import * as React from 'react'
import { Text } from 'react-native-magnus'
import { StatusBar } from 'react-native'

import { Container } from 'components'

export function ExploreScreen() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>explore screen.</Text>
    </Container>
  )
}
