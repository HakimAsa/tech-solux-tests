// components/BaseScreen.js

import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import colors from '../config/colors'

interface BaseScreenProps {
  children: React.ReactNode
  style?: ViewProps['style']
}

export default function BaseScreen({ children, style }: BaseScreenProps) {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    //colors.white, // force it to be white
    // padding: 16, // optional
  },
})
