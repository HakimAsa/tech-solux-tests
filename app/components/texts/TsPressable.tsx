import { Pressable, PressableProps, TextProps } from 'react-native'

import TsText from './TsText'
import colors from '@/app/config/colors'
import { ReactNode } from 'react'

interface TsPressable extends PressableProps {
  big?: boolean
  medium?: boolean
  small?: boolean
  styleText?: TextProps['style']
  children: ReactNode | string
}

export default function TsPressable({
  big,
  children,
  disabled,
  medium,
  onPress,
  small,
  style,
  styleText,
}: TsPressable) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={style}
    >
      <TsText
        big={big}
        medium={medium}
        small={small}
        style={[{ color: colors.primary }, styleText]}
      >
        {children}
      </TsText>
    </Pressable>
  )
}
