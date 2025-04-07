import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicRowContainer } from '../containers'
import TsText from './texts/TsText'
import colors from '../config/colors'

interface StarRatingProps {
  rating?: number
  totalReview?: number // Match Figma spacing
}

export default function Star({ rating, totalReview }: StarRatingProps) {
  const filledStars = rating ? Math.floor(rating) : 0
  const totalStars = 5
  return (
    <>
      {totalReview ? (
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
              style={{ width: 14, height: 14 }}
            />
          ))}

          <TsText
            fontSize={10}
            style={{
              fontFamily: 'Montserrat_400Regular',
              color: colors.lightblackgray,
            }}
          >
            {totalReview}
          </TsText>
        </BasicRowContainer>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({})
