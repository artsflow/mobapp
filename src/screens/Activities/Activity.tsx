import * as React from 'react'
import { Text, Div } from 'react-native-magnus'

import { Container } from 'components'
import { Category, Gallery } from './Activities'
import { getAvailableDatesMap } from './utils'

export function ActivityScreen({ route }: any) {
  const { category, title, description, frequency, images } = route.params.item

  // console.log(route.params.item)

  return (
    <Container disableSafeArea>
      <Gallery data={images} ratio={1.2} />
      <Div mx={20}>
        <Category data={category} />
        <Text fontSize="xl">{title}</Text>
        <Text mt={12}>{description.replace(/^\s+|\s+$/g, '')}</Text>
        <Separator />
        <AvailableDates data={frequency} />
      </Div>
    </Container>
  )
}

const Separator = () => <Div my={20} bg="#ddd" h={1} />

const AvailableDates = ({ data }: any) => {
  const { rrules, exdate } = data
  const datesMap = getAvailableDatesMap(rrules, exdate)

  console.log(datesMap)

  return (
    <Div>
      <Text fontSize="xl">Available Dates</Text>
    </Div>
  )
}
