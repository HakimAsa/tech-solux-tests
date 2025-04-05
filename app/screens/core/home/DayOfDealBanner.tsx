import { Image, Pressable, StyleSheet, View } from 'react-native'

import RowContainer from '@/app/containers/RowContainer'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import en from '@/app/config/en'

export default function DayOfDealBanner() {
  return (
    <RowContainer style={styles.container}>
      <View style={{ gap: 4 }}>
        <TsText style={{ color: colors.white, lineHeight: 20 }}>
          {en.dealOfTheDay}
        </TsText>
        <RowContainer>
          <Image
            style={{ width: 16, height: 16 }}
            source={require('@/assets/images/counter.png')}
          />

          <TsText
            small
            style={{ color: colors.white, lineHeight: 16, left: 5 }}
          >
            {/* add it dynamically later */}
            22h 55min 20s remaining
          </TsText>
        </RowContainer>
      </View>
      <Pressable
        style={styles.viewAll}
        onPress={() => alert('View all')}
      >
        <RowContainer>
          <View style={{ height: 16, alignItems: 'center' }}>
            <TsText
              small
              style={{
                color: colors.white,
                fontFamily: 'Montserrat_600SemiBold',
                lineHeight: 16,
                alignSelf: 'center',
              }}
            >
              {en.viewAll + ' '}
            </TsText>
          </View>
          <Image
            source={require('@/assets/images/leftarrow.png')}
            style={{ width: 16, height: 16 }}
          />
        </RowContainer>
      </Pressable>
    </RowContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4392F9',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
    marginVertical: 15,
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
