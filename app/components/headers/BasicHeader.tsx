import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BasicHeader() {
  return (
    <View style={styles.container}>
      <Text>BasicHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
})
