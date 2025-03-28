import { StyleSheet, TouchableOpacity } from 'react-native'
import { ReactNode } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import colors, { ColorKeys } from '@/app/config/colors'
import TsText from '../texts/TsText'

type IconType = keyof typeof MaterialIcons.glyphMap

interface Button {
  button?: object
  children: ReactNode | string
  color?: ColorKeys
  disabled?: boolean
  fontSize?: number
  icon?: IconType
  onPress(params: any): void
  textColor?: string
}

export default function TrButton({
  disabled,
  children,
  color = 'primary',
  fontSize = 22,
  textColor,
  icon,
  onPress,
  button,
}: Button) {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.3}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? colors.medium : colors[color],
        },
        button,
      ]}
      onPress={onPress}
    >
      <TsText
        style={[
          styles.text,
          {
            color: disabled ? colors.lightgray : textColor || colors.white,
            fontSize,
          },
        ]}
      >
        {children}
      </TsText>
      <MaterialIcons
        name={icon}
        size={20}
        color={textColor || colors.white}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 48,
    // padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: 'none',
    fontWeight: 'bold',
  },
})
