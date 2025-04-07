import { StyleSheet, Text, View, ViewProps } from 'react-native'

// BasicRowContainer takes a list of children components and renders them in a row with a specified gap.
interface RowProps {
  children: React.ReactNode
  style?: ViewProps['style']
  gap?: number // default gap is 2 (matches Figma spacing)
}

export default function BasicRowContainer({
  children,
  style,
  gap = 1,
}: RowProps) {
  return <View style={[styles.container, { gap }, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})
