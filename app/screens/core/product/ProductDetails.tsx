import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import MainContainer, { BasicRowContainer } from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import TsProps from '@/TsProps'
import ImageSlider from '@/app/components/sliders/ImageSlider'
import colors from '@/app/config/colors'
import Size from './Size'
import Star from '@/app/components/Star'
import TsText from '@/app/components/texts/TsText'
import { calculateListPrice } from '@/app/utils/helpers'
import { currencySymbolRupee } from '@/app/config/constants'
import MoreText from '@/app/components/MoreText'
import TsText20 from '@/app/components/texts/TsText20'
import DetailBtn from './DetailBtn'
import { Feather } from '@expo/vector-icons'

const images = [
  require('@/assets/images/nikesneakermixed.png'),
  require('@/assets/images/nikesneakermixed.png'),
  require('@/assets/images/nikesneakermixed.png'),
  require('@/assets/images/nikesneakermixed.png'),
  require('@/assets/images/nikesneakermixed.png'),
]

export default function ProductDetails({ navigation, route }: TsProps) {
  const { item } = route?.params || {}
  const renderItem = () => null
  const ListHeaderItem = () => (
    <>
      <BasicHeader
        leftIconStyle={-16}
        showRight
        showTitle={false}
        onPress={() => navigation.goBack()}
        rightIconStyle={{
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          overflow: 'hidden',
        }}
      />
      <MainContainer style={{ paddingLeft: 16, padding: 16, paddingBottom: 0 }}>
        <ImageSlider
          imageList={images}
          dotColor={colors.primary}
          activeDotSize={10}
          showRightChevron
        />
        <Size productSize={item?.size} />
        <TsText20
          style={{ fontFamily: 'Montserrat_600SemiBold', marginBottom: 8 }}
          title={item?.name || 'Nike Sneaker'}
        />
        <TsText
          style={{
            fontFamily: 'Montserrat_400Regular',
            lineHeight: 16,
            color: colors.black,
            marginBottom: 8,
          }}
        >
          Vision Alta Men’s Shoes Size (All Colours)
        </TsText>
        <Star
          starSize={18}
          totalReview={0}
          totalReviewStyle={{
            fontFamily: 'Montserrat_500Regular',
            fontSize: 14,
            alignSelf: 'center',
            lineHeight: 16,
          }}
        />
        <BasicRowContainer
          gap={8}
          style={{ marginVertical: 8 }}
        >
          <TsText
            medium
            style={styles.listPrice}
          >
            {currencySymbolRupee}
            {calculateListPrice(1500, 50)}
          </TsText>
          <TsText
            medium
            style={{
              lineHeight: 16,
              color: colors.black,
            }}
          >
            {currencySymbolRupee}1500
          </TsText>
          <TsText
            medium
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              lineHeight: 16,
              color: colors.secondary,
            }}
          >
            50% Off
          </TsText>
        </BasicRowContainer>
        <TsText medium>Product Details</TsText>
        <MoreText text='Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the day' />
        <BasicRowContainer gap={8}>
          <DetailBtn
            iconName="map-marker-radius-outline"
            text="Nearest Store"
          />
          <DetailBtn
            iconName="lock-outline"
            text="VIP"
          />
          <DetailBtn
            iconName="rotate-3d-variant"
            text="Return policy"
          />
        </BasicRowContainer>
        {/* call to action section */}
        <BasicRowContainer
          gap={10}
          style={{ height: 36, marginVertical: 8 }}
        >
          <TsText>Go to Cart</TsText>
          <TsText>Buy Now</TsText>
          <Pressable>
            <Feather
              name="heart"
              color={colors.black}
              size={35}
            />
          </Pressable>
        </BasicRowContainer>

        {/* nearest section */}
        <View
          style={{
            marginVertical: 8,
            backgroundColor: '#FFCCD5',
            borderRadius: 5,
            height: 60,
            justifyContent: 'center',
          }}
        >
          <TsText
            style={{
              fontFamily: 'Montsserrat_600SemiBold',
              lineHeight: 16,
              paddingLeft: 39,
            }}
            medium
          >
            Delivery in
          </TsText>
          <TsText
            style={{
              fontFamily: 'Poppins_600SemiBold',
              fontSize: 21,
              lineHeight: 25,
              paddingLeft: 40,
              marginTop: 4,
              color: '#010101',
            }}
          >
            1 within Hour
          </TsText>
        </View>

        <TsText>{item?.name || 'good'}</TsText>
      </MainContainer>
    </>
  )
  return (
    <BaseScreen>
      <FlatList
        data={[]}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderItem}
      />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  listPrice: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 16,
    color: '#808488',
    textDecorationLine: 'line-through',
  },
  longText: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 16,
    color: colors.black,
    marginVertical: 1,
  },
})
