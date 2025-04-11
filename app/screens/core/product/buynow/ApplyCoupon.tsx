import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicRowContainer, RowContainer } from '@/app/containers'
import SvgIcon from '@/app/components/icons/SvgIcon'
import TsText from '@/app/components/texts/TsText'
import TsPressable from '@/app/components/texts/TsPressable'

export default function ApplyCoupon() {
  return (
    <RowContainer>
      <BasicRowContainer gap={15}>
        <Image
          source={require('@/assets/images/iconcoupon.png')}
          style={{
            width: 31,
            height: 20,
          }}
        />
        <TsText style={{ letterSpacing: -0.7 }}>Apply Coupons</TsText>
      </BasicRowContainer>
      <TsPressable
        styleText={styles.text}
        medium
        onPress={() => console.log('select')}
      >
        Select
      </TsPressable>
    </RowContainer>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    letterSpacing: -0.7,
  },
})
