import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export function SavedIcon({ focused }: any) {
  const unfocusedColor = '#bbbbbe'

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7111 4.13354C13.8535 4.13354 12.6806 5.03776 12 5.8555C11.3194 5.03776 10.1465 4.13354 8.28822 4.13354C5.1249 4.13354 3 7.06412 3 9.80066C3 13.7853 10.6536 19.1248 11.5261 19.7203C11.6688 19.8173 11.8347 19.8665 12 19.8665C12.1659 19.8665 12.3311 19.818 12.4739 19.7203C13.3465 19.1247 20.9999 13.7851 20.9999 9.80066C20.9999 7.06412 18.8744 4.13354 15.7111 4.13354Z"
        fill={focused ? '#47BCC8' : unfocusedColor}
      />
    </Svg>
  )
}
