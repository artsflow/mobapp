import * as React from 'react'
import { Text, Div, Button, Icon } from 'react-native-magnus'
import { ScrollView, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'

import { Container } from 'components'
import { AvailableDates } from './components/AvailableDates'
import { Category } from './Activities'
import { getFrequencyText } from './utils'

export function ActivityScreen({ route, navigation }: any) {
  const {
    category,
    title,
    description,
    frequency,
    duration,
    capacity,
    price,
    images,
  } = route.params.item
  const [selectedDate, setSelectedDate] = React.useState(null)
  const [selectedTime, setSelectedTime] = React.useState(null)

  const frequencyText = getFrequencyText(frequency.rrules)

  const handleChange = ({ d, t }: any) => {
    console.log('handleChange')
    if (d) {
      setSelectedDate(d)
      setSelectedTime(null)
    }
    if (t) {
      setSelectedTime(t)
    }
  }

  const handleConfirmBooking = () => {
    console.log('handleConfirmBooking')
    navigation.navigate('ConfirmBooking', {
      title,
      selectedDate,
      selectedTime,
      frequency,
      duration,
      handleChange,
    })
  }

  return (
    <Container disableSafeArea>
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
    </Container>
  )
}

const Separator = () => <Div my={20} bg="#ddd" h={1} />

const Gallery = ({ data, ratio = 1.8, roundedTop = 16, roundedBottom = 16, ...rest }: any) => {
  const { width } = Dimensions.get('window')
  const height = (width - 40) / ratio

  const rounded = {
    borderTopLeftRadius: roundedTop ? roundedTop : 0,
    borderTopRightRadius: roundedTop ? roundedTop : 0,
    borderBottomLeftRadius: roundedBottom ? roundedBottom : 0,
    borderBottomRightRadius: roundedBottom ? roundedBottom : 0,
  }

  return (
    <Div h={height} {...rest}>
      <Swiper dotColor="grey" activeDotColor="white" loop={false}>
        {data &&
          data.map((img: string) => (
            <FastImage
              key={img}
              style={{ height, ...rounded }}
              source={{
                uri: `https://ik.imagekit.io/artsflow/tr:w-${width},h-${height},fo-auto/${img}`,
              }}
            />
          ))}
      </Swiper>
    </Div>
  )
}
