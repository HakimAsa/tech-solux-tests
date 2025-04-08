import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicRowContainer } from '@/app/containers'
import colors from '@/app/config/colors'
import { Image } from 'react-native'
import TsText from '@/app/components/texts/TsText'
import en from '@/app/config/en'

export default function SpecialOffer() {
  return (
    <BasicRowContainer
      gap={15}
      style={styles.container}
    >
      <Image
        source={require('@/assets/images/specialoffer.png')}
        style={styles.image}
      />
      <View style={{ gap: 10 }}>
        <BasicRowContainer gap={10}>
          <TsText style={styles.title}>{en.specialOffers}</TsText>
          <Image
            source={require('@/assets/images/specialofferemoji.png')}
            style={{ width: 20, height: 20, borderRadius: 10 }}
          />
        </BasicRowContainer>
        <View style={{ width: 171 }}>
          <TsText
            small
            style={[styles.subTitle, styles.commonTextStyle]}
          >
            {en.specialOffersText}
          </TsText>
        </View>
      </View>
    </BasicRowContainer>
  )
}

const styles = StyleSheet.create({
  commonTextStyle: {
    lineHeight: 16,
  },
  container: {
    backgroundColor: colors.white,
    height: 84,
    paddingLeft: 4,
    borderRadius: 6,
    marginVertical: 15,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 60,
  },
  subTitle: {
    fontFamily: 'Montserrat_300Light',
    color: colors.black,
  },
  title: {
    color: colors.black,
    lineHeight: 20,
  },
})
