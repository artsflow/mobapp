import * as React from 'react'
import { Text, Button } from 'react-native-magnus'

import { Container } from 'components'

export function AuthScreen({ navigation, ...rest }: any) {
  console.log('rest', rest)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('dismiss', () => {
      console.log('auth dismiss!!!')
    })

    return unsubscribe
  }, [navigation])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('appear', () => {
      console.log('auth appear!!!')
    })

    return unsubscribe
  }, [navigation])

  const close = () => navigation.pop()

  return (
    <Container>
      <Text>Auth screen</Text>
      <Button onPress={close}>Cose</Button>
    </Container>
  )
}
