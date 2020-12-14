import * as React from 'react'
import { FlatList, TouchableWithoutFeedback } from 'react-native'
import { Text, Div, Radio } from 'react-native-magnus'
import { format } from 'date-fns'

import { getAvailableDatesMap, getTimeSlot } from '../utils'

interface Props {
  frequency: any
  duration: number
  selected: any
  onChange: (o: any) => void
  isOnModal?: boolean
}

export const AvailableDates = ({
  frequency,
  duration,
  selected,
  onChange,
  isOnModal = false,
}: Props) => {
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
      {!isOnModal && selected.date ? (
        <>
          <Text mt={20} mb={10}>
            Press to select the time slot:
          </Text>
          <Div row>
            {availableTimes.map((t, idx) => {
              const checked = t === selected.time
              const timeSlot = getTimeSlot(t, duration)
              return (
                <TouchableWithoutFeedback onPress={() => onChange({ t })} key={idx}>
                  <Div
                    bg={checked ? 'black' : 'white'}
                    borderWidth={1}
                    borderColor="#E6E6E6"
                    rounded={8}
                    px={12}
                    py={10}
                    mr={10}
                  >
                    <Text color={checked ? 'white' : 'black'}>{timeSlot}</Text>
                  </Div>
                </TouchableWithoutFeedback>
              )
            })}
          </Div>
        </>
      ) : null}
      {isOnModal && selected.date ? (
        <Div>
          <Text mt={30} mb={20} fontSize="lg">
            Available timeslots for {format(new Date(selected.date), 'd LLLL')}
          </Text>
          <Div>
            {availableTimes.map((t, idx) => {
              const checked = t === selected.time
              const timeSlot = getTimeSlot(t, duration)
              return (
                <TouchableWithoutFeedback onPress={() => onChange({ t })} key={idx}>
                  <Div
                    bg="#F5F5F5"
                    borderWidth={1}
                    borderColor="#E6E6E6"
                    rounded={8}
                    px={15}
                    py={20}
                    mb={15}
                  >
                    <Radio checked={checked} activeColor="black" onChange={() => onChange({ t })}>
                      <Text ml={12}>{timeSlot}</Text>
                    </Radio>
                  </Div>
                </TouchableWithoutFeedback>
              )
            })}
          </Div>
        </Div>
      ) : null}
    </Div>
  )
}
