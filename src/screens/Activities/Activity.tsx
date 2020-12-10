import * as React from 'react'
import { Text } from 'react-native-magnus'

import { Container } from 'components'

export function ActivityScreen({ route }: any) {
  console.log(route.params)
  return (
    <Container>
      <Text>ArtActivity screen.</Text>
    </Container>
  )
}
