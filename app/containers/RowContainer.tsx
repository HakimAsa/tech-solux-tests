import { StyleSheet, View, ViewProps } from 'react-native'
import { ReactNode } from 'react'

export default function RowContainer({
  children,
  style,
}: {
  children: ReactNode
  style?: ViewProps['style']
}) {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // or 'space-around'
  },
})
