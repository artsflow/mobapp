import * as React from 'react'
import { Navigation } from 'react-native-navigation'

interface Dimensions {
  statusBarHeight: number
  topBarHeight: number
  bottomTabsHeight: number
}

const defaultDimensions: Dimensions = {
  statusBarHeight: 0,
  topBarHeight: 0,
  bottomTabsHeight: 0,
}

export function useNavigationDimensions() {
  const [dimensions, setDimensions] = React.useState(defaultDimensions)

  React.useEffect(() => {
    const getNavigationBarsDimensions = async () => {
      const d = await Navigation.constants()
      setDimensions(d)
    }
    getNavigationBarsDimensions()
  }, [])

  return dimensions
}
