import { StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import TsText from '@/app/components/texts/TsText'
import { RowContainer } from '@/app/containers'
import TsPressable from '@/app/components/texts/TsPressable'

export default function EmiAvailable({
  showTextStyle,
}: {
  showTextStyle?: TextProps['style']
}) {
  return (
    <RowContainer style={{ flex: 1, width: 167, height: 20, marginTop: -60 }}>
      <TsText
        medium
        style={[styles.showText, showTextStyle]}
      >
        EMI Available
      </TsText>
      <TsPressable
        styleText={{ fontFamily: 'Montserrat_600SemiBold' }}
        small
      >
        Details
      </TsPressable>
    </RowContainer>
  )
}

const styles = StyleSheet.create({
  showText: {
    fontFamily: 'Montserrat_400Regular',
    letterSpacing: -0.7,
  },
})
