import * as React from 'react'
import { Text, Div, Avatar, Icon } from 'react-native-magnus'
import { FlatList } from 'react-native'

import { Container } from 'components'
import { useExplore } from 'services/art-sessions'

const Item = ({ category, title, description, price }: any) => (
  <Div p={5} mx="xl" mb={50}>
    <Div h={205} borderColor="#E6E6E6" borderWidth={1} rounded={8} />
    <Div alignItems="flex-start" my={16}>
      <Text bg="rgba(196, 196, 196, 0.3)" px={20} py={5}>
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
