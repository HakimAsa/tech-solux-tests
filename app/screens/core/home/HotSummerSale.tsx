import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import { RowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import Cta from '@/app/components/buttons/Cta'

export default function HotSummerSale({ onPress }: { onPress?: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('@/assets/images/hotsummersale.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <RowContainer style={styles.details}>
        <View>
          <TsText style={styles.newArrival}>New Arrivals</TsText>
          <TsText style={styles.summer}>Summer’ 25 Collections</TsText>
        </View>
        <Cta />
      </RowContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 343,
    height: 270,
    borderRadius: 8,
  },
  details: {
    top: -35,
    padding: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '100%',
    height: 240,
    top: -20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  newArrival: {
    fontSize: 20,
    lineHeight: 22,
  },
  summer: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 20,
  },
})
