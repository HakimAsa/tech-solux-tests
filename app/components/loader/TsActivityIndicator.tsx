import { ActivityIndicator, StyleSheet, View } from 'react-native'

import colors from '@/app/config/colors'
import TsText from '../texts/TsText'

interface IndicatorProp {
  visible?: boolean
  text?: string
}

export default function TsActivityIndicator({
  visible = false,
  text = '',
}: IndicatorProp) {
  if (!visible) return null
  return (
    <View style={styles.animationContainer}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
      />
      <TsText
        big
        style={{ marginTop: 15, color: colors.primary }}
      >
        {text}
      </TsText>
    </View>
  )
}
const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
