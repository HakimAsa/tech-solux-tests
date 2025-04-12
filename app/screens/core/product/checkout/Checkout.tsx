import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import colors from '@/app/config/colors'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import en from '@/app/config/en'
import TsProps from '@/TsProps'
import BorderWidth from '../BorderWidth'
import OrderSummary from './OrderSummary'
import {
  currencySymbolDollar,
  currencySymbolRupee,
} from '@/app/config/constants'
import TsButton from '@/app/components/buttons/TsButton'
import TsText from '@/app/components/texts/TsText'
import PaymenttInput from '@/app/components/inputs/PaymentInput'
import routes from '@/app/navigation/routes'

export default function Checkout({ navigation }: TsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>('visa') // Track selected payment method

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method) // Update the selected method
  }

  const handleContinue = () => {
    if (selectedMethod) {
      console.log(`Selected Payment Method: ${selectedMethod}`)
      // Navigate to the next screen or perform the confirmation logic
      navigation.navigate(routes.CONFIRMATION, {
        paymentMethod: selectedMethod,
      })
    }
  }
  const doSetStyle = (method: string) => {
    return {
      borderColor: method === selectedMethod ? colors.primary : '#F8F8F8',
      borderWidth: method === selectedMethod ? 1.5 : 1,
    }
  }
  return (
    <>
      <ScrollableMainContainer
        contentContainerStyle={{
          backgroundColor: colors.white,
          paddingBottom: 146, // Add padding equal to the height of TsBottomTab
        }}
        style={{ backgroundColor: colors.white }}
      >
        <BaseScreen style={{ backgroundColor: colors.white }}>
          <BasicHeader
            onPress={() => navigation.goBack()}
            onRightIconPress={() => console.log('liked it')}
            title={en.checkout}
            leftIconStyle={-22}
          />
          <BorderWidth borderColor="rgba(198, 198, 198, 0.2)" />
          <MainContainer
            style={{
              padding: 33,
              paddingLeft: 33,
              backgroundColor: colors.white,
              marginVertical: 15,
            }}
          >
            <OrderSummary
              currency={currencySymbolDollar || currencySymbolRupee}
            />
            <TsText style={{ fontSize: 18, lineHeight: 27, color: '#222222' }}>
              Payment
            </TsText>
            <PaymenttInput
              style={{ ...doSetStyle('visa') }}
              image={require('@/assets/images/visa.png')}
              imageStyle={{ width: 47.83, height: 20 }}
              placeholder="*********2109"
              onFocus={() => handleSelectMethod('visa')} // Select this method on focus
            />
            <PaymenttInput
              image={require('@/assets/images/paypal.png')}
              imageStyle={{ width: 62.76, height: 20 }}
              placeholder="*********2109"
              style={{ ...doSetStyle('paypal') }}
              onFocus={() => handleSelectMethod('paypal')} // Select this method on focus
            />
            <PaymenttInput
              image={require('@/assets/images/maestro.png')}
              imageStyle={{
                width: 20,
                height: 20,
              }}
              style={{ ...doSetStyle('maestro') }}
              placeholder="*********2109"
              onFocus={() => handleSelectMethod('maestro')} // Select this method on focus
            />
            <PaymenttInput
              style={{ ...doSetStyle('apple') }}
              image={require('@/assets/images/apple.png')}
              wrapper={{
                backgroundColor: colors.white,
                borderRadius: 100,
                width: 24,
                height: 24,
              }}
              imageStyle={{
                width: 8.18,
                height: 10.36,
              }}
              placeholder="*********2109"
              onFocus={() => handleSelectMethod('apple')} // Select this method on focus
            />
            <TsButton
              onPress={handleContinue}
              button={{
                marginTop: 15,
                backgroundColor: selectedMethod ? colors.primary : '#D3D3D3', // Disable button if no method is selected
              }}
              disabled={!selectedMethod} // Disable button if no method is selected
            >
              {en.continue}
            </TsButton>
          </MainContainer>
        </BaseScreen>
      </ScrollableMainContainer>
      {/* <Modal></Modal> */}
    </>
  )
}

const styles = StyleSheet.create({})
