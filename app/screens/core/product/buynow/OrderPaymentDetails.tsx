import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import { currencySymbolRupee } from '@/app/config/constants'
import TsPressable from '@/app/components/texts/TsPressable'
import OrderAmount from '../OrderAmount'

export default function OrderPaymentDetails({
  currency,
  amount = 7000,
}: {
  amount?: number
  currency?: string
}) {
  return (
    <View style={styles.container}>
      <TsText style={{ letterSpacing: -0.7, fontSize: 17 }}>
        Order Payment Details
      </TsText>
      <View style={styles.details}>
        <OrderAmount
          currency={currency}
          labelStyle={styles.text}
          amount={amount}
        />
        <RowContainer>
          <RowContainer style={{ gap: 15 }}>
            <TsText style={styles.text}>Convenience</TsText>
            <TsPressable
              small
              styleText={{
                fontFamily: 'Montserrat_600SemiBold',
                height: 15,
                top: 5,
              }}
            >
              Know More
            </TsPressable>
          </RowContainer>
          <TsPressable
            onPress={() => Alert.alert('COUPON', 'Coupon Applied')}
            small
            styleText={{
              fontFamily: 'Montserrat_600SemiBold',
              height: 15,
              top: 5,
              color: '#EA1712',
            }}
          >
            Apply Coupon
          </TsPressable>
        </RowContainer>
        <RowContainer>
          <TsText
            medium
            style={styles.text}
          >
            Delivery Fee
          </TsText>
          <TsPressable
            styleText={{
              fontFamily: 'Montserrat_600SemiBold',
            }}
            medium
          >
            Free
          </TsPressable>
        </RowContainer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 128,
    justifyContent: 'space-between',
    // flex: 1,
  },
  details: {
    // flex: 1,
    height: 81, // 128 - (460 - 413 ) from figma
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    letterSpacing: -0.7,
  },
})
