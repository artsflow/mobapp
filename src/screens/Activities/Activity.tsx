import * as React from 'react'
import { Text, Div, Icon } from 'react-native-magnus'
import { FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { format } from 'date-fns'

import { Container } from 'components'
import { Category, Gallery } from './Activities'
import { getAvailableDatesMap, getTimeSlot, getFrequencyText } from './utils'

export function ActivityScreen({ route }: any) {
  const { category, title, description, frequency, duration, capacity, images } = route.params.item
  const [selectedDate, setSelectedDate] = React.useState(null)
  const [selectedTime, setSelectedTime] = React.useState(null)
  const frequencyText = getFrequencyText(frequency.rrules)

  const handleChange = ({ d, t }: any) => {
    if (d) {
      setSelectedDate(d)
    }
    if (t) {
      setSelectedTime(t)
    }
  }

  return (
    <Container disableSafeArea>
      <ScrollView>
        <Gallery data={images} ratio={1.2} />
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
              <Text>
                Frequency:{' '}
                {frequencyText.map((f, idx) => (
                  <Text fontWeight="bold">
                    {f}
                    {idx < frequencyText.length - 1 ? ', ' : ''}
                  </Text>
                ))}
              </Text>
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
    </Container>
  )
}

const Separator = () => <Div my={20} bg="#ddd" h={1} />

const AvailableDates = ({ frequency, duration, selected, onChange }: any) => {
  const { rrules, exdate } = frequency
  const datesMap = getAvailableDatesMap(rrules, exdate)
  const availableTimes: string[] = Array.from(datesMap.get(selected.date) || [])

  const renderItem = ({ item }: any) => {
    const d = new Date(item)
    const checked = item === selected.date
    return (
      <TouchableWithoutFeedback onPress={() => onChange({ d: item })}>
        <Div
          bg={checked ? 'black' : 'white'}
          alignItems="center"
          rounded={8}
          py={8}
          px={23}
          mr={14}
          borderColor="#E6E6E6"
          borderWidth={1}
        >
          <Text color={checked ? 'white' : 'black'}>{format(d, 'E')}</Text>
          <Text color={checked ? 'white' : 'black'}>
            {format(d, 'd')} {format(d, 'LLL')}
          </Text>
        </Div>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <Div>
      <Text fontSize="xl" mb={20}>
        Available Dates
      </Text>
      <Text mb={20}>Press to select one of the available dates below:</Text>
      <FlatList
        horizontal
        renderItem={renderItem}
        data={[...datesMap.keys()]}
        keyExtractor={(item) => item}
      />
      {selected.date ? (
        <>
          <Text mt={20} mb={10}>
            Press to select the time slot:
          </Text>
          <Div row>
            {availableTimes.map((t) => {
              const checked = t === selected.time
              const timeSlot = getTimeSlot(t, duration)
              return (
                <TouchableWithoutFeedback onPress={() => onChange({ t })}>
                  <Div
                    bg={checked ? 'black' : 'white'}
                    borderWidth={1}
                    borderColor="#E6E6E6"
                    rounded={8}
                    px={12}
                    py={10}
                  >
                    <Text color={checked ? 'white' : 'black'}>{timeSlot}</Text>
                  </Div>
                </TouchableWithoutFeedback>
              )
            })}
          </Div>
        </>
      ) : null}
    </Div>
  )
}
