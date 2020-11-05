import * as React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native'

import { Logo } from 'components/Logo'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Logo type="artsflow" width={242} height={54} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

export default App
