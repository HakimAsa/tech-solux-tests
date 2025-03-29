import { View } from 'react-native'
import { ReactNode } from 'react'

import { StatusBarHeight } from '@/app/config/constants'
import colors from '../config/colors'

interface MainContainerProps {
  children?: ReactNode
  style?: any
}

export default function MainContainer({ children, style }: MainContainerProps) {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingLeft: 32,
          backgroundColor: colors.white,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}
