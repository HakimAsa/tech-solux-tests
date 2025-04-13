import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import MainContainer, {
  BasicRowContainer,
  RowContainer,
  ScrollableMainContainer,
} from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import en from '@/app/config/en'
import TsProps from '@/TsProps'
import TsText from '@/app/components/texts/TsText'
import ItemPicker from '../ItemPicker'
import colors from '@/app/config/colors'
import ApplyCoupon from './ApplyCoupon'
import LineSeparator from '@/app/components/LineSeparator'
import OrderPaymentDetails from './OrderPaymentDetails'
import TotalOrder from '../TotalOrder'
import EmiAvailable from './EmiAvailable'
import TsBottomTab from '@/app/components/tabs/TsBottomTab'
import routes from '@/app/navigation/routes'

export default function BuyNow({ navigation, route }: TsProps) {
  const { item } = route?.params || {}
  const { name, shortDescription, price, discount, image } = item || {}
  const discountedPrice = discount ? price - (price * discount) / 100 : price
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
            title={en.buyNow}
            showRight
            iconName="heart"
            leftIconStyle={-17}
            rightIconStyle={{ left: '105%' }}
          />
          <MainContainer
            style={{
              padding: 17,
              paddingLeft: 17,
              backgroundColor: colors.white,
            }}
          >
            <View style={{ flex: 1, gap: 40 }}>
              <BasicRowContainer gap={15}>
                <Image
                  source={
                    image?.[0] ||
                    require('@/assets/images/womenprintedkurta.png')
                  }
                  style={{ width: 123, height: 153, borderRadius: 4 }}
                />

                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                  <TsText>{name || 'Women’s Casual Wear'}</TsText>
                  <TsText style={styles.shortDescription}>
                    {shortDescription || 'Checked Single-Breasted Blazer'}
                  </TsText>
                  <RowContainer style={{ gap: 5 }}>
                    <ItemPicker onPress={() => console.log('Sizes')} />
                    <ItemPicker
                      label="Qty"
                      onPress={() => console.log('Qties')}
                      value={1}
                    />
                  </RowContainer>

                  <BasicRowContainer gap={5}>
                    <TsText style={styles.delivery}>Delivery by</TsText>
                    <TsText style={styles.date}>2XXX</TsText>
                  </BasicRowContainer>
                </View>
              </BasicRowContainer>

              <ApplyCoupon />
              <LineSeparator color="#CACACA" />
              <OrderPaymentDetails />
              <LineSeparator color="#CACACA" />
              <TotalOrder amount={7000} />
              <EmiAvailable />
            </View>
          </MainContainer>
        </BaseScreen>
      </ScrollableMainContainer>
      <TsBottomTab
        amount={7000}
        onPress={() =>
          navigation.navigate('ProductTab', {
            screen: routes.CHECKOUT, // Navigate to Checkout within ShoppingCartStack
            params: { id: item?._id },
          })
        }
        //navigation.navigate(routes.CHECKOUT, { id: item?._id })}
      />
    </>
  )
}

const styles = StyleSheet.create({
  date: {
    fontFamily: 'Montserrat_600SemiBold',
    lineHeight: 16,
    letterSpacing: -1.1,
  },
  delivery: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: -0.3,
  },
  shortDescription: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    lineHeight: 13,
  },
})
