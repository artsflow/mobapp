import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { TabNavigator } from './Tabs'
import { ModalScreen } from 'screens'

const RootStack = createStackNavigator()

export function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
        mode="modal"
      >
        <RootStack.Screen name="Tabs" component={TabNavigator} />
        <RootStack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ animationEnabled: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
