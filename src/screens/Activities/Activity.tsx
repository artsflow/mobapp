import * as React from 'react'
import { Text, Div, Button, Snackbar, Icon } from 'react-native-magnus'
import { ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { Container, Modal } from 'components'
import { AvailableDates } from './components/AvailableDates'
import { Category, Gallery } from './Activities'
import { getFrequencyText } from './utils'
import { useNavigationDimensions } from 'hooks'
import { isAndroid } from 'utils'

export function ActivityScreen(props: any) {
  const { category, title, description, frequency, duration, capacity, price, images } = props.item
  const [selectedDate, setSelectedDate] = React.useState(null)
  const [selectedTime, setSelectedTime] = React.useState(null)
  const [isVisible, setVisible] = React.useState(false)
  const dimensions = useNavigationDimensions()

  const frequencyText = getFrequencyText(frequency.rrules)
  const snackbarRef: any = React.createRef()

  const handleChange = ({ d, t }: any) => {
    if (d) {
      setSelectedDate(d)
      setSelectedTime(null)
    }
    if (t) {
      setSelectedTime(t)
    }
  }

  console.log(dimensions)

  // { statusBarHeight: 49.45454406738281,
  //   topBarHeight: 56,
  //   backButtonId: 'RNN.back',
  //   bottomTabsHeight: 56 }

  // { statusBarHeight: 48,
  //   topBarHeight: 44,
  //   backButtonId: undefined,
  //   bottomTabsHeight: 83 }

  const handleConfirmBooking = () => {
    console.log('handleConfirmBooking')
    // setVisible(true)
    Navigation.showModal({
      component: {
        name: 'Modal',
        passProps: {
          // isVisible: true,
        },
      },
    })
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
    <Container disableSafeArea mt={isAndroid ? 0 : -dimensions.statusBarHeight}>
      <ScrollView>
        <Gallery data={images} ratio={1.2} roundedTop={0} />
        <Div mx={20}>
          <Category data={category} />
          <Text fontSize="xl">{title}</Text>
          <Text mt={12}>{description.replace(/^\s+|\s+$/g, '')}</Text>
          <Separator />
          <Text fontSize="xl" mb={20}>
            Event details
          </Text>
          <Div>
            <Div row>
              <Icon
                mr={10}
                name="timer-sand"
                fontSize="xl"
                color="black"
                fontFamily="MaterialCommunityIcons"
              />
              <Text>
                Duration: <Text fontWeight="bold">{duration} mins</Text>
              </Text>
            </Div>
            <Div row my={20}>
              <Icon mr={10} name="users" fontSize="xl" color="black" fontFamily="FontAwesome5" />
              <Text>
                Capacity: <Text fontWeight="bold">{capacity} people</Text>
              </Text>
            </Div>
            <Div row alignItems="flex-start">
              <Icon
                mr={10}
                name="table-clock"
                fontSize="xl"
                color="black"
                fontFamily="MaterialCommunityIcons"
              />
              <Text>Frequency: </Text>
              <Div>
                {frequencyText.map((f, idx) => (
                  <Text fontWeight="bold" key={idx}>
                    {f}
                    {idx < frequencyText.length - 1 ? ', ' : ''}
                  </Text>
                ))}
              </Div>
            </Div>
          </Div>
          <Separator />
          <AvailableDates
            frequency={frequency}
            duration={duration}
            onChange={handleChange}
            selected={{ date: selectedDate, time: selectedTime }}
          />
          <Separator />
        </Div>
      </ScrollView>
      <Div row bg="#F0F0F0" p={20} pb={40} justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">£{price} / session</Text>
        <Button fontSize="lg" bg="black" px={35} py={15} onPress={handleConfirmBooking}>
          {selectedTime ? 'Review Dates' : 'Show Dates'}
        </Button>
      </Div>
      <Modal title="Confirm your booking" isVisible={isVisible} onClose={() => setVisible(false)}>
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
      </Modal>
    </Container>
  )
}

const Separator = () => <Div my={20} bg="#ddd" h={1} />
