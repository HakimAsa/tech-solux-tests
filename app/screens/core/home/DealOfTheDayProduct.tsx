import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'

export default function DealOfTheDayProduct() {
  return (
    <View style={styles.container}>
      <Text>DealOfTheDayProduct</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
    elevation: 1,
    backgroundColor: colors.white,
  },
})
