import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TsText from '../texts/TsText'

interface ErrorMessagesProps {
  error?: string
  visible?: boolean
}

export default function ErrorMessages({ error, visible }: ErrorMessagesProps) {
  if (!visible || !error) return null
  return (
    <TsText
      small
      style={styles.error}
    >
      {error}
    </TsText>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
})
