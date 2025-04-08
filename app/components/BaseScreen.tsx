// components/BaseScreen.js

import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import colors from '../config/colors'
import { StatusBarHeight } from '../config/constants'

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
    backgroundColor: colors.background, //'#FDFDFD',
    paddingTop: StatusBarHeight,

    //colors.white, // force it to be white
    // padding: 16, // optional
  },
})
