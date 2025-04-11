import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TsProps from '@/TsProps'

export default function Cart({ route }: TsProps) {
  console.log('Route Params', route.params)
  const { item } = route?.params || {}
  // console.log('cart item', JSON.stringify(item))
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>{item?.name ?? 'Cart'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
