import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { currencySymbolRupee, ScreenWidth } from '@/app/config/constants'
import { RowContainer } from '@/app/containers'
import TsText from '../texts/TsText'
import TsButton from '../buttons/TsButton'
import TsPressable from '../texts/TsPressable'
import { formatNumberWithCurrency } from '@/app/utils/helpers'

export default function TsBottomTab({
  onPress,
  amount = 0,
  currency = currencySymbolRupee,
}: {
  onPress: () => void
  amount?: number
  currency?: string
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <RowContainer
          style={{
            justifyContent: 'space-around',
          }}
        >
          <View style={{ justifyContent: 'space-around' }}>
            <TsText
              medium
              style={{ fontFamily: 'Montserrat_600SemiBold' }}
            >
              {formatNumberWithCurrency(amount, currency)}
            </TsText>
            <TsPressable small>View Details</TsPressable>
          </View>
          <TsButton
            button={{ width: 219 }}
            style={styles.textStyle}
            onPress={onPress}
          >
            Proceed To Payment
          </TsButton>
        </RowContainer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 146,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    // alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Montserrat_100Thin_Italic',
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  wrapper: {
    position: 'absolute', // Position the wrapper at the bottom
    bottom: 0,
    width: ScreenWidth,
    borderRadius: 24, // Apply borderRadius here
    overflow: 'hidden', // Ensure the child respects the borderRadius
    backgroundColor: 'rgba(0,0,0,0.3)', // Background color for the wrapper // Ensure the child respects the borderRadius
    // borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    // elevation: 1,
    borderTopWidth: 1,
  },
})
