import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

export default function LineSeparator() {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1, //todo
    marginVertical: 15,
    backgroundColor: colors.separator,
  },
})
