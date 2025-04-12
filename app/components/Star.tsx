import { Image, StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import { BasicRowContainer } from '../containers'
import TsText from './texts/TsText'
import colors from '../config/colors'

interface StarRatingProps {
  rating?: number
  totalReview?: number // Match Figma spacing
  starSize?: number // Match Figma spacing
  totalReviewStyle?: TextProps['style'] // Match Figma spacing
  starHeight?: number
}

export default function Star({
  rating,
  totalReview = 0,
  totalReviewStyle,
  starSize,
  starHeight,
}: StarRatingProps) {
  const filledStars = rating ? Math.floor(rating) : 0
  const totalStars = 5
  return (
    <>
      <BasicRowContainer
        gap={5}
        style={{
          paddingLeft: 4,
          marginBottom: 4,
        }}
      >
        {[...Array(totalStars)].map((_, index) => (
          <Image
            key={index.toString()}
            source={
              index < filledStars
                ? require('@/assets/images/starfilled.png')
                : require('@/assets/images/star.png')
            }
            style={{
              width: starSize || 14,
              height: starHeight || starSize || 14,
            }}
          />
        ))}

        {totalReview > 0 ? (
          <TsText
            fontSize={10}
            style={[
              {
                fontFamily: 'Montserrat_400Regular',
                color: colors.lightblackgray,

                top: 2,
              },
              totalReviewStyle,
            ]}
          >
            {totalReview}
          </TsText>
        ) : null}
      </BasicRowContainer>
    </>
  )
}

const styles = StyleSheet.create({})
