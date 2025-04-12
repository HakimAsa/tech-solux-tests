import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TsProps from '@/TsProps'
import BaseScreen from '@/app/components/BaseScreen'
import TsBottomTab from '@/app/components/tabs/TsBottomTab'
import MainContainer, {
  BasicRowContainer,
  RowContainer,
  ScrollableMainContainer,
} from '@/app/containers'
import colors from '@/app/config/colors'
import BasicHeader from '@/app/components/headers/BasicHeader'
import en from '@/app/config/en'
import { Image } from 'react-native'
import TsText from '@/app/components/texts/TsText'
import LineSeparator from '@/app/components/LineSeparator'
import routes from '@/app/navigation/routes'
import Star from '@/app/components/Star'
import {
  calculateListPrice,
  formatNumberWithCurrency,
} from '@/app/utils/helpers'
import { currencySymbolDollar } from '@/app/config/constants'
import TotalOrder from '../TotalOrder'
import OrderAmount from '../OrderAmount'
import ColorVariation from './ColorVariation'
import SvgIcon from '@/app/components/icons/SvgIcon'
import Address from './Address'
import AddAdress from './AddAdress'
const MAP_SVG =
  'M6.9999 1.00042C3.69097 1.00042 1 3.52323 1 6.62539V7.0003C1 8.29806 1.43645 9.56355 2.24685 10.6154L6.04221 15.54C6.26426 15.8284 6.62077 16 7.00007 16C7.38204 16 7.7407 15.8223 7.95632 15.5269L11.8 10.2593C12.5812 9.18884 13 7.92196 13 6.62497C13 3.52282 10.309 1 7.0001 1L6.9999 1.00042ZM6.9999 1.75037C9.87649 1.75037 12.1999 3.92855 12.1999 6.62545C12.1999 7.77141 11.8308 8.89065 11.1406 9.83635L7.29516 15.1039C7.22807 15.1958 7.11865 15.2504 6.99985 15.2504C6.87678 15.2504 6.76254 15.1961 6.69049 15.1025L2.89512 10.1763C2.18302 9.25196 1.79974 8.14066 1.79974 7.00046V6.62555C1.79974 3.92871 4.12311 1.75047 6.99977 1.75047L6.9999 1.75037Z'
export default function Cart({ route, navigation }: TsProps) {
  const { item } = route?.params || {}
  const {
    image,
    name,
    rating,
    price,
    discount,
    currencySymbol,
    colorVariation,
  } = item || {}

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
            title={en.cart}
            leftIconStyle={-22}
          />
          <MainContainer
            style={{
              padding: 22,
              paddingLeft: 22,
              backgroundColor: colors.white,
            }}
          >
            <View style={{ flex: 1, gap: 10 }}>
              {/* Address Section */}
              <View style={{ gap: 10 }}>
                <BasicRowContainer
                  gap={10}
                  style={{ alignItems: 'center' }}
                >
                  <Image
                    source={require('@/assets/images/map.png')}
                    style={{ width: 12, height: 15 }}
                  />
                  <TsText
                    medium
                    style={{
                      fontFamily: 'Montserrat_600SemiBold',
                      lineHeight: 22,
                    }}
                  >
                    {en.deliveryAddress}
                  </TsText>
                </BasicRowContainer>
                <RowContainer>
                  <Address onPencilClick={() => alert('Edit Address')} />
                  <AddAdress />
                </RowContainer>
              </View>
              <TsText
                style={styles.shoppingHeader}
                medium
              >
                Shopping List
              </TsText>
              <View
                style={{
                  elevation: 1,
                  backgroundColor: '#fff',
                  // flex: 1,
                  height: 191,
                  padding: 10,
                  borderRadius: 6,
                }}
              >
                <BasicRowContainer gap={5}>
                  <Image
                    source={
                      image?.[0] ||
                      require('@/assets/images/womenprintedkurta.png')
                    }
                    style={{ width: 130.53, height: 125, borderRadius: 6 }}
                  />

                  <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <TsText
                      medium
                      style={styles.shoppingHeader}
                    >
                      {name || 'Women’s Casual Wear'}
                    </TsText>
                    {/* Variation Section */}
                    {/* <RowContainer>
                      <TsText
                        small
                        style={{ lineHeight: 22 }}
                      >
                        {'Variations :'}
                      </TsText>
                      <RowContainer style={{ justifyContent: 'space-around' }}>
                        <View
                          style={{
                            width: 39,
                            height: 17,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TsText>Black</TsText>
                        </View>
                        <View
                          style={{
                            width: 39,
                            height: 17,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TsText>Red</TsText>
                        </View>
                      </RowContainer>
                    </RowContainer> */}
                    <ColorVariation
                      colorList={colorVariation || ['Black', 'Red']}
                    />

                    <BasicRowContainer style={{ gap: 5, alignItems: 'center' }}>
                      <TsText
                        small
                        style={{ lineHeight: 22 }}
                      >
                        {rating?.average ?? 4.8}
                      </TsText>
                      <Star
                        starSize={11.67}
                        starHeight={11.08}
                      />
                    </BasicRowContainer>

                    <BasicRowContainer
                      style={{
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 4,
                          // backgroundColor: '#CACACA',
                          borderColor: '#CACACA',
                          borderWidth: 0.3,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 84,
                          height: 29,
                        }}
                      >
                        <TsText
                          style={{
                            lineHeight: 22,
                            fontFamily: 'Montserrat_600SemiBold',
                          }}
                        >
                          {formatNumberWithCurrency(
                            price || 34,
                            currencySymbolDollar
                          )}
                        </TsText>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                        }}
                      >
                        <TsText
                          style={{
                            lineHeight: 22,
                            fontSize: 8,
                            color: '#EB3030',
                            // top: -3,
                          }}
                        >
                          upto {discount || 33}% off
                        </TsText>

                        <TsText
                          small
                          style={{
                            lineHeight: 22,
                            color: '#A7A7A7',
                            top: -8,
                            textDecorationLine: 'line-through',
                          }}
                        >
                          {formatNumberWithCurrency(
                            calculateListPrice(price || 34, 33),
                            currencySymbolDollar
                          )}
                        </TsText>
                      </View>
                    </BasicRowContainer>
                  </View>
                </BasicRowContainer>
                <LineSeparator color="#CACACA" />
                <View style={{ top: -7.5 }}>
                  <OrderAmount
                    label="Total Order(1) :"
                    labelStyle={styles.labelStyle}
                    amountStyle={[
                      styles.labelStyle,
                      { fontFamily: 'Montserrat_600SemiBold' },
                    ]}
                    amount={price || 34}
                    currency={currencySymbol || currencySymbolDollar}
                  />
                </View>
              </View>
            </View>
          </MainContainer>
        </BaseScreen>
      </ScrollableMainContainer>
      <TsBottomTab
        amount={price || 34}
        currency={currencySymbol || currencySymbolDollar}
        onPress={() => navigation.navigate(routes.CHECKOUT, { id: item?._id })}
      />
    </>
  )
}

const styles = StyleSheet.create({
  shoppingHeader: {
    fontFamily: 'Montserrat_600SemiBold',
    lineHeight: 22,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 22,
  },
})
