import { StyleSheet } from 'react-native'
import React from 'react'
import TsText from './TsText'

export default function TsText20({ title }: { title: string }) {
  return <TsText style={styles.text}>{title}</TsText>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 22,
  },
})
