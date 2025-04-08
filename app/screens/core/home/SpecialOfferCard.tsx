import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import Pipe from '@/app/components/Pipe'
import { BasicRowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import ViewAll from '@/app/components/ViewAll'

export default function SpecialOfferCard() {
  return (
    <View style={styles.container}>
      <View style={styles.pipe}>
        <Pipe />
      </View>
      <BasicRowContainer
        gap={2}
        style={{ paddingLeft: 16 }}
      >
        <Image
          source={require('@/assets/images/womenstransparenthighheelssandals.png')}
          resizeMode="contain"
          style={{ width: 144, height: 108 }}
        />
        <View>
          <TsText style={{ lineHeight: 20 }}>Flat and Heels</TsText>
          <TsText style={styles.subTitle}>
            Stand a chance to get rewarded
          </TsText>
          <ViewAll
            onPress={() => Alert.alert('SPECIAL OFFER', 'View All')}
            style={{ position: 'absolute', right: 0, top: 54 }}
          />
        </View>
      </BasicRowContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 343,
    height: 172,
    justifyContent: 'center',
  },
  pipe: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  subTitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 4,
  },
})
