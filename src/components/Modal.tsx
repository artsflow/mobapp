import * as React from 'react'
import { Text, Div, Icon, Button, Modal as MModal } from 'react-native-magnus'

interface Props {
  isVisible: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isVisible, onClose, title, children }: Props) {
  return (
    <MModal isVisible={isVisible} h="90%" roundedTop={12} p={20}>
      <Div row alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" textAlign="center" flex={1} pl={35}>
          {title}
        </Text>
        <Button bg="white" h={35} w={35} rounded="circle" onPress={onClose}>
          <Icon color="black" fontSize="xl" name="close" />
        </Button>
      </Div>
      <Div mt={50} justifyContent="space-between" flex={1}>
        {children}
      </Div>
    </MModal>
  )
}
