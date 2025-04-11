import { StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import OrderAmount from './OrderAmount'
import { BasicRowContainer, RowContainer } from '@/app/containers'
import TsPressable from '@/app/components/texts/TsPressable'
import TsText from '@/app/components/texts/TsText'

export default function TotalOrder({ amount = 0 }: { amount?: number }) {
  return (
    <View style={styles.container}>
      <OrderAmount
        label="Order Total"
        labelStyle={styles.label}
        amount={amount}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 51,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    letterSpacing: -0.7,
  },
})
