import { Alert, Image, Pressable, StyleSheet, ViewProps } from 'react-native'

import TsText from '../texts/TsText'
import en from '../../config/en'
import colors from '../../config/colors'
import { BasicRowContainer } from '../../containers'

export default function Cta({
  onPress,
  style,
  text = en.viewAll,
}: {
  onPress?: () => void
  style?: ViewProps['style']
  text?: string
}) {
  return (
    <Pressable
      style={[styles.viewAll, style]}
      onPress={onPress || (() => Alert.alert('HOT SUMMER SALE', 'View all'))}
    >
      <BasicRowContainer
        style={{ height: 16, alignItems: 'center' }}
        gap={2}
      >
        <TsText
          small
          style={{
            color: colors.white,
            fontFamily: 'Montserrat_600SemiBold',
            lineHeight: 16,
            alignSelf: 'center',
          }}
        >
          {text}
        </TsText>

        <Image
          source={require('@/assets/images/leftarrow.png')}
          style={{ width: 16, height: 16 }}
        />
      </BasicRowContainer>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  viewAll: {
    width: 89,
    height: 28,
    backgroundColor: colors.primary,
    borderRadius: 4,
    padding: 10,
    top: 15,
    paddingTop: 6,
    paddingBottom: 6,
  },
})
