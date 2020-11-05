import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  height?: number
  width?: number
  type: string
}

const AfLogo = ({ style, width, height }: Props) => (
  <Svg viewBox="0 0 259 339" style={style} width={width} height={height}>
    <Path
      d="M79.49 93.556c-32.87-.015-62.345 20.224-74.162 50.876-11.818 30.667-3.547 65.44 20.827 87.504 24.374 22.05 59.795 26.834 89.134 12.029v-70.933a35.798 35.798 0 01-22.095 33.067c-13.371 5.539-28.766 2.475-39.013-7.758-10.233-10.232-13.296-25.626-7.758-39.013a35.797 35.797 0 0133.067-22.095c19.756.03 35.769 16.028 35.799 35.784v-70.934a79.136 79.136 0 00-35.799-8.527z"
      fill="#45BCC8"
    />
    <Path d="M115.274 93.556V252.492h43.677V93.556h-43.677z" fill="#765EA6" />
    <Path
      d="M257.82 93.466h-77.242v43.677h77.242V93.466zm-64.58 0h-12.677v43.677h12.677V93.466z"
      fill="#45BCC8"
    />
    <Path
      d="M257.82 0h-21.839c-23.589.03-42.711 19.152-42.741 42.741v50.725h43.677V43.662h20.903V0zm-20.903 137.143H193.24v115.349h43.677V137.143z"
      fill="#FDC744"
    />
    <Path d="M258.71 294.705H0v43.752h258.71v-43.752z" fill="#E27CB0" />
  </Svg>
)

const ArtsflowLogo = ({ style, width, height }: Props) => (
  <Svg viewBox="0 0 646 145" style={style} width={width} height={height}>
    <Path
      fill="#45BCC8"
      d="M46.3 53.9a46 46 0 00-42.9 29 45 45 0 0012 50 46.5 46.5 0 0051.6 6.8V99.2c0 8.3-5 15.8-12.8 19a21 21 0 01-22.5-4.5c-6-5.9-7.7-14.7-4.5-22.3a20.7 20.7 0 0119.1-12.6C57.8 78.8 67 88 67 99.2V58.7A46.4 46.4 0 0046.3 54z"
    />
    <Path fill="#765EA6" d="M67 53.9v90.7h25.3V53.9H67z" />
    <Path fill="#FCCE36" d="M132.8 53.9h-25v90.8-57a33.8 33.8 0 0125-32.6v-1.2" />
    <Path
      fill="#765EA6"
      d="M141.6 53.9c-3 0-6 .4-8.8 1.2v32.6a8.8 8.8 0 0115-6.3l17.7-17.6c-6.3-6.4-15-10-23.9-9.9z"
    />
    <Path fill="#E27CB0" d="M132.8 55c-14.7 4-25 17.4-25 32.7v57h25V55" />
    <Path
      fill="#45BCC8"
      d="M206 .5h-25V54h25V.5zm0 78.3h-25v41.4c0 13.5 11 24.4 24.4 24.4H218v-25h-12V78.9"
    />
    <Path fill="#FCCE36" d="M217.9 53.9h-12v25h12v-25zm-36.9 0h-7.2v25h7.2v-25z" />
    <Path fill="#FCCE36" d="M206 53.9h-25v25h25v-25z" />
    <Path
      fill="#E27CB0"
      d="M293.5 53.9H258a29 29 0 100 57.8h15a4 4 0 010 8h-35.4v24.9h35.7a28.9 28.9 0 00-.4-57.8h-14.9a4 4 0 010-8h35.4V54z"
    />
    <Path fill="#765EA6" d="M355.3 53.9h-44v25h44v-25zm-36.8 0h-7.3v25h7.3v-25z" />
    <Path
      fill="#FDC744"
      d="M355.3.6H343c-13.5 0-24.4 10.9-24.4 24.4v28.9h24.9V25.5h12V.5zm-12 78.2h-24.8v65.8h24.9V78.8z"
    />
    <Path fill="#45BCC8" d="M391.6.6h-25v144.2h25V.6z" />
    <Path
      fill="#FDC744"
      d="M451.4 54a45.3 45.3 0 100 90.6 45.3 45.3 0 000-90.7zm0 65.7a20.4 20.4 0 110-40.9 20.4 20.4 0 010 40.9z"
    />
    <Path
      fill="#765EA6"
      d="M565.9 53.9v51a15 15 0 01-29.9 0v-51h-24.9v51a39.8 39.8 0 0067.2 28.8c-8-7.5-12.4-18-12.4-28.9V54z"
    />
    <Path
      fill="#E27CB0"
      d="M645.5 53.9h-24.9v51a15 15 0 11-29.8 0v-51 51c0 10.8-4.5 21.3-12.5 28.8a39.8 39.8 0 0067.3-28.9V54"
    />
    <Path
      fill="#45BCC8"
      d="M590.8 53.9h-25v51c0 10.8 4.6 21.3 12.5 28.8 8-7.5 12.5-18 12.5-28.9V54"
    />
  </Svg>
)

export function Logo(props: Props) {
  return props.type === 'artsflow' ? <ArtsflowLogo {...props} /> : <AfLogo {...props} />
}
