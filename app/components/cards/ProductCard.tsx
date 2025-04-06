import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import React from 'react'

import TsText from '../texts/TsText'

interface ProductProps {
  item: {
    id: string
    price: number
    discount?: number
    rating?: {
      average: number
      count: number
    }
    description: string
    name: string
    image: ImageSourcePropType
  }
  small?: boolean // Match Figma size
  medium?: boolean // Match Figma size
  big?: boolean // Match Figma size
  nameFontSize?: number // Match Figma size
  descriptionFontSize?: number // Match Figma size
}

export default function ProductCard({
  item,
  small,
  medium,
  big,
  nameFontSize,
  descriptionFontSize,
}: ProductProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          resizeMode="cover"
          source={item.image}
          style={styles.image}
        />
      </View>
      <View style={{ padding: 4 }}>
        <TsText
          fontSize={nameFontSize}
          small={small}
          medium={medium}
          numberOfLines={1}
          big={big}
          style={[styles.commonTextStyle]}
        >
          {item.name}
        </TsText>
        <TsText
          fontSize={descriptionFontSize}
          small={small}
          medium={medium}
          numberOfLines={2}
          big={big}
          style={[styles.description, styles.commonTextStyle]}
        >
          {item.description}
        </TsText>
        <TsText
          small
          style={[styles.commonTextStyle]}
        >
          {'$' + item.price}
        </TsText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  commonTextStyle: {
    lineHeight: 16,
  },
  container: {
    width: 170,
    height: 241,
    gap: 5,
  },
  description: {
    fontFamily: 'Montserrat_400Regular',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: 170,
    height: 124,
  },
})
