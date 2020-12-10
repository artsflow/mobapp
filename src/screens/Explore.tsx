import * as React from 'react'
import { Text, Div, Avatar, Icon, Image } from 'react-native-magnus'
import { FlatList, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

import { Container } from 'components'
import { useExplore } from 'services/art-sessions'

export const { width } = Dimensions.get('window')

const Item = ({ category, title, description, price, images }: any) => {
  const height = (width - 40) / 1.5
  return (
    <Div mx={20} mb={50}>
      <Div h={height} borderColor="#E6E6E6" borderWidth={1} rounded={8}>
        <Swiper dotColor="grey" activeDotColor="white">
          {images &&
            images.map((img: string) => (
              <Image
                key={img}
                h={height}
                rounded={8}
                source={{
                  uri: `https://ik.imagekit.io/artsflow/tr:w-${width},h-${height},fo-auto/${img}`,
                }}
              />
            ))}
        </Swiper>
      </Div>
      <Div alignItems="flex-start" my={16}>
        <Text bg="rgba(196, 196, 196, 0.3)" px={20} py={5} rounded={4}>
          {category}
        </Text>
      </Div>

      <Text fontSize="xl">{title}</Text>
      <Text mt={12}>{description.slice(0, 150).replace(/^\s*\n/gm, '')}...</Text>

      <Div flexDir="row" justifyContent="space-between" mt={16} alignItems="center">
        <Avatar bg="#E0E0E0" size={36} mr={10} />
        <Div>
          <Text>by John Doe</Text>
          <Div flexDir="row">
            <Icon name="star" color="grey" fontSize={12} fontFamily="FontAwesome" mr={5} />
            <Text fontSize="xs">4.7</Text>
          </Div>
        </Div>
        <Div ml="auto">
          <Text>£{price} / session</Text>
        </Div>
      </Div>
    </Div>
  )
}

export function ExploreScreen() {
  const { data } = useExplore()
  // console.log(loading, error, data)

  const renderItem = ({ item }: any) => <Item {...item} />

  return (
    <Container pt={16}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </Container>
  )
}
