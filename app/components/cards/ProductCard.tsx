import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import React from 'react'

import TsText from '../texts/TsText'
import colors from '@/app/config/colors'
import { BasicRowContainer } from '@/app/containers'
import { calculateListPrice } from '@/app/utils/helpers'
import Star from '../Star'

interface ProductProps {
  item: {
    id: string
    price: number
    discount?: number
    rating?: {
      average: number
      count: number
    }
    description?: string
    name?: string
    image: ImageSourcePropType
  }
  small?: boolean // Match Figma size
  medium?: boolean // Match Figma size
  big?: boolean // Match Figma size
  nameFontSize?: number // Match Figma size
  descriptionFontSize?: number // Match Figma size
  width?: number
  height?: number
  imageHeight?: number // Match Figma size
  showName?: boolean
  showStar?: boolean
}

export default function ProductCard({
  big,
  descriptionFontSize,
  height = 241,
  imageHeight = 124,
  item,
  medium,
  nameFontSize,
  small,
  width = 170,
  showName = true,
  showStar = true,
}: ProductProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={{ width, height: imageHeight }}>
        <Image
          resizeMode="cover"
          source={item.image}
          style={styles.image}
        />
      </View>
      <View style={{ padding: 4 }}>
        {showName && (
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
        )}
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
          ₹{item.price}
        </TsText>
        {item.discount && item.discount > 0 ? (
          <BasicRowContainer gap={10}>
            <TsText
              small
              style={[styles.commonTextStyle, styles.discount]}
            >
              ₹{calculateListPrice(item.price, item.discount)}
            </TsText>
            <TsText
              fontSize={10}
              style={[styles.commonTextStyle, styles.off]}
            >
              {item.discount}%Off
            </TsText>
          </BasicRowContainer>
        ) : null}
      </View>
      {showStar && (
        <Star
          rating={item.rating?.average}
          totalReview={item.rating?.count}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  commonTextStyle: {
    lineHeight: 16,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    gap: 5,
    marginTop: 0,
    marginVertical: 15,
  },
  description: {
    fontFamily: 'Montserrat_400Regular',
  },
  discount: {
    color: colors.shadeBlack,
    fontFamily: 'Montserrat_300Light',
    textDecorationLine: 'line-through',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  off: {
    color: colors.lightRed,
    fontFamily: 'Montserrat_400Regular',
  },
  // Add your own styles here if needed  //
})
