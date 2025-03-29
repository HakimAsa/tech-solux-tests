import { View } from 'react-native'
import TsText from '../../components/texts/TsText'
import { StyleSheet } from 'react-native'

interface HeaderProps {
  title: string
}

export default function AuthHeader({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TsText style={styles.title}>{title}</TsText>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 63,
    left: 32,
    width: 185,
    height: 83,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 36,
    lineHeight: 44,
    textAlign: 'left',
  },
})
