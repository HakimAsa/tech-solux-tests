import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import { formatNumberWithCurrency } from '@/app/utils/helpers'
import BorderWidth from '../BorderWidth'

export default function OrderSummary({
  totalOrderAmount = 34,
  totalShippingFee = 0,
  currency,
}: {
  totalOrderAmount?: number
  totalShippingFee?: number
  currency?: string
}) {
  return (
    <View style={styles.container}>
      <RowContainer>
        <TsText style={styles.common}>Order</TsText>
        <TsText style={styles.common}>
          {formatNumberWithCurrency(totalOrderAmount, currency)}
        </TsText>
      </RowContainer>
      <RowContainer>
        <TsText style={styles.common}>Shipping</TsText>
        <TsText style={styles.common}>
          {formatNumberWithCurrency(totalShippingFee, currency)}
        </TsText>
      </RowContainer>
      <RowContainer>
        <TsText style={styles.total}>Total</TsText>
        <TsText style={styles.total}>
          {formatNumberWithCurrency(
            totalOrderAmount + totalShippingFee,
            currency
          )}
        </TsText>
      </RowContainer>
      <BorderWidth
        style={{ marginVertical: 10 }}
        borderBottomWidth={1.5}
        borderColor="#C4C4C4"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  common: {
    color: '#A8A8A9',
    fontSize: 18,
    lineHeight: 24,
  },
  container: {
    gap: 15,
    padding: 10,
  },
  total: {
    color: '#4C5059',
    fontSize: 18,
    lineHeight: 24,
  },
})
