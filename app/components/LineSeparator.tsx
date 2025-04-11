import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

export default function LineSeparator({
  color = colors.separator,
}: {
  color?: string
}) {
  return <View style={[styles.separator, { backgroundColor: color }]} />
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1, //todo
    marginVertical: 15,
  },
})
