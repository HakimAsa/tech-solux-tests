import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TsProps from '@/TsProps'
import BaseScreen from '@/app/components/BaseScreen'

export default function Cart({ route }: TsProps) {
  const { item } = route?.params || {}

  return (
    <BaseScreen>
      <Text>{item?.name ?? 'Cart'}</Text>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
