import { StyleSheet, View } from 'react-native'
import { ReactNode } from 'react'

export default function RowContainer({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // or 'space-around'
  },
})
