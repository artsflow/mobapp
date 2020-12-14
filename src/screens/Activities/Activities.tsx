import * as React from 'react'
import { Text, Div, Avatar, Icon, Image } from 'react-native-magnus'
import { FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

import { Container } from 'components'
import { useActivitiesList } from 'services/activities'

const Item = (item: any) => {
  const { category, title, description, price, images } = item
  const navigation = useNavigation()

  const handleDetailsPress = () => {
    navigation.navigate('Activity', { item })
  }

  const handleUserPress = () => {
    navigation.navigate('ArtistProfile', { item })
  }

  return (
    <Div mx={20} mb={50}>
      <Gallery data={images} />
      <Category data={category} />
      <TouchableWithoutFeedback onPress={handleDetailsPress}>
        <Div>
          <Text fontSize="xl">{title}</Text>
          <Text mt={12}>{description.slice(0, 150).replace(/^\s*\n/gm, '')}...</Text>

          <Div mt={16} w="100%" flexDir="row" alignItems="center" justifyContent="space-between">
            <TouchableWithoutFeedback onPress={handleUserPress}>
              <Div flexDir="row">
                <Avatar bg="#E0E0E0" size={36} mr={10} />
                <Div>
                  <Text>by John Doe</Text>
                  <Div flexDir="row">
                    <Icon name="star" color="grey" fontSize={12} fontFamily="FontAwesome" mr={5} />
                    <Text fontSize="xs">4.7</Text>
                  </Div>
                </Div>
              </Div>
            </TouchableWithoutFeedback>
            <Div ml="auto">
              <Text>£{price} / session</Text>
            </Div>
          </Div>
        </Div>
      </TouchableWithoutFeedback>
    </Div>
  )
}

export function ActivitiesScreen() {
  const { data } = useActivitiesList()

  const renderItem = ({ item }: any) => <Item {...item} />

  return (
    <Container>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </Container>
  )
}

export const Category = ({ data }: any) => (
  <Div alignItems="flex-start" my={16}>
    <Text bg="rgba(196, 196, 196, 0.3)" px={20} py={5} rounded={4}>
      {data}
    </Text>
  </Div>
)

export const Gallery = ({ data, ratio = 1.5, ...rest }: any) => {
  const { width } = Dimensions.get('window')
  const height = (width - 40) / ratio

  return (
    <Div h={height} {...rest}>
      <Swiper dotColor="grey" activeDotColor="white" loop={false}>
        {data &&
          data.map((img: string) => (
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
  )
}
