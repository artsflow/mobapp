import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { TabNavigator } from './Tabs'
import { ModalScreen } from 'screens'

enableScreens()
const RootStack = createNativeStackNavigator()

export function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false, stackPresentation: 'modal' }}>
        <RootStack.Screen name="Tabs" component={TabNavigator} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
