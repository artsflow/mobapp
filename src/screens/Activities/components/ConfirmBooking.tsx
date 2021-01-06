import * as React from 'react'
import { Text, Button, Icon, Div, Snackbar } from 'react-native-magnus'

import { Container } from 'components'
import { AvailableDates } from './AvailableDates'

export function ConfirmBookingScreen({ navigation, route }: any) {
  const { title, selectedDate, selectedTime, frequency, duration, handleChange } = route.params
  const snackbarRef: any = React.createRef()

  const close = () => {
    navigation.pop()
  }

  const handlePayment = () => {
    console.log('handlePayment')
    if (snackbarRef.current && (!selectedDate || !selectedTime)) {
      snackbarRef.current.show()
      return
    }
    console.log(selectedDate, selectedTime)
  }

  return (
    <Container>
      <Div row justifyContent="space-between" p={20}>
        <Text textAlign="center" flex={1} fontWeight="bold" fontSize="lg">
          Confirm your booking
        </Text>
        <Button onPress={close} bg="white" rounded="circle">
          <Icon name="close" color="black" fontSize="xl" />
        </Button>
      </Div>
      <Div mx={20} mb={20} flex={1} justifyContent="space-between">
        <Div>
          <Text fontSize="md">Event Info:</Text>
          <Text fontSize="xl" mb={20}>
            {title}
          </Text>
          <AvailableDates
            frequency={frequency}
            duration={duration}
            onChange={handleChange}
            selected={{ date: selectedDate, time: selectedTime }}
            isOnModal
          />
        </Div>
        <Button w="100%" py={15} bg="black" fontSize="lg" rounded={10} onPress={handlePayment}>
          Continue with payment
        </Button>
        <Snackbar
          suffix={<Icon name="alert" color="white" fontSize="md" fontFamily="Foundation" />}
          ref={snackbarRef}
          bg="red"
          color="white"
          duration={2000}
          position="absolute"
          bottom={30}
          fontSize="xl"
        >
          Date and time slots are not selected
        </Snackbar>
      </Div>
    </Container>
  )
}
