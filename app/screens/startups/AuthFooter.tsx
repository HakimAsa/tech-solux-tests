import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'

interface AuthFooterProps {
  onPress: () => void
  linkText: string
  unlinkText: string
  top?: number
  height?: number // Match Figma spacing
  width?: number // Match Figma spacing
}

export default function AuthFooter({
  onPress,
  linkText,
  unlinkText,
  height = 17,
  top = 567,
  width = 132,
}: AuthFooterProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        top,
        height,
        width,
        alignSelf: 'center',
        marginBottom: 45,
      }}
    >
      <TsText
        medium
        style={{
          fontFamily: ' Montserrat_400Regular',
          color: '#575757',
        }}
      >
        {unlinkText}{' '}
      </TsText>
      <TouchableOpacity onPress={onPress}>
        <TsText
          medium
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            color: colors.primary,
            textDecorationLine: 'underline',
          }}
        >
          {linkText}
        </TsText>
      </TouchableOpacity>
    </View>
  )
}
