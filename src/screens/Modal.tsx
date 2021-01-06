import * as React from 'react'
import { Text, Button, Icon, Div } from 'react-native-magnus'

import { Container } from 'components'

export function ModalScreen({ navigation, route }: any) {
  const { onDismiss, onAppear, onClose, title, content } = route.params

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('dismiss', () => {
      if (onDismiss) {
        onDismiss()
      }
    })

    return unsubscribe
  }, [navigation, onDismiss])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('appear', () => {
      if (onAppear) {
        onAppear()
      }
    })

    return unsubscribe
  }, [navigation, onAppear])

  const close = () => {
    navigation.pop()

    if (onClose) {
      onClose()
    }
  }

  return (
    <Container>
      <Div row justifyContent="space-between" p={20}>
        <Text textAlign="center" flex={1} fontSize="lg">
          {title}
        </Text>
        <Button onPress={close} bg="white" rounded="circle">
          <Icon name="close" color="black" fontSize="xl" />
        </Button>
      </Div>
      {content}
    </Container>
  )
}
