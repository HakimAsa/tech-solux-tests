import { Image, Pressable, StyleSheet, View } from 'react-native'

import RowContainer from '@/app/containers/RowContainer'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import en from '@/app/config/en'
import RemainingTime from './RemainingTime'
import { BasicRowContainer } from '@/app/containers'

type Mode = 'time' | 'calendar' | null | false

export default function DealOfTheDayBanner({
  onPress,
  color = '#4392F9',
  mode = 'time',
  title = en.dealOfTheDay,
}: {
  color?: string
  mode?: Mode
  title?: string
  onPress?: () => void
}) {
  return (
    <RowContainer style={[styles.container, { backgroundColor: color }]}>
      <View style={{ gap: 4 }}>
        <TsText style={{ color: colors.white, lineHeight: 20 }}>{title}</TsText>
        <View style={{ flexDirection: 'row', gap: 2 }}>
          <Image
            style={{ width: 16, height: 16 }}
            source={
              mode === 'calendar'
                ? require('@/assets/images/calendar.png')
                : require('@/assets/images/counter.png')
            }
          />
          <RemainingTime mode={mode as any} />
        </View>
      </View>
      <Pressable
        style={styles.viewAll}
        onPress={onPress}
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
            {en.viewAll}
          </TsText>

          <Image
            source={require('@/assets/images/leftarrow.png')}
            style={{ width: 16, height: 16 }}
          />
        </BasicRowContainer>
      </Pressable>
    </RowContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
    marginVertical: 15,
    marginBottom: 0,
  },
  viewAll: {
    width: 89,
    height: 28,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
})
