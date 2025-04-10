import { StyleSheet, TextProps } from 'react-native'
import React from 'react'
import TsText from './TsText'

export default function TsText20({
  title,
  style,
}: {
  title: string
  style?: TextProps['style']
}) {
  return <TsText style={[styles.text, style]}>{title}</TsText>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 22,
  },
})
