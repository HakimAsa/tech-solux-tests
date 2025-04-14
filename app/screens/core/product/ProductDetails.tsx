import { Alert, FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import MainContainer, {
  BasicRowContainer,
  RowContainer,
} from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import TsProps from '@/TsProps'
import ImageSlider from '@/app/components/sliders/ImageSlider'
import colors from '@/app/config/colors'
import Size from './Size'
import Star from '@/app/components/Star'
import TsText from '@/app/components/texts/TsText'
import getApiUrl, { calculateListPrice } from '@/app/utils/helpers'
import {
  currencySymbolRupee,
  ScreenWidth,
  StatusBarHeight,
} from '@/app/config/constants'
import MoreText from '@/app/components/MoreText'
import TsText20 from '@/app/components/texts/TsText20'
import DetailBtn from './DetailBtn'
import GoToCartBtn from './gottocart/GoToCartBtn'
import BuyNowBtn from './buynow/BuyNowBtn'
import SvgIcon from '@/app/components/icons/SvgIcon'
import FilterSortBanner from '@/app/components/FilterSortBanner'
import routes from '@/app/navigation/routes'
import products from '@/app/data/products'
import ProductCard from '@/app/components/cards/ProductCard'
import { useCart } from '@/app/context/CartContext'
import { useSearchContext } from '@/app/context/SearchContext'
import useAuth from '@/app/context/auth/useAuth'
import productApi from '@/app/api/products'

const PATH =
  'M24.3333 1C19 1 16 5.445 16 7.66667C16 5.445 13 1 7.66667 1C2.33333 1 1 5.445 1 7.66667C1 19.3333 16 27.6667 16 27.6667C16 27.6667 31 19.3333 31 7.66667C31 5.445 29.6667 1 24.3333 1Z'
const EYE_SVG =
  'M11 2.5C14.79 2.5 18.17 4.63 19.82 8C18.17 11.37 14.8 13.5 11 13.5C7.2 13.5 3.83 11.37 2.18 8C3.83 4.63 7.21 2.5 11 2.5ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 5.5C12.38 5.5 13.5 6.62 13.5 8C13.5 9.38 12.38 10.5 11 10.5C9.62 10.5 8.5 9.38 8.5 8C8.5 6.62 9.62 5.5 11 5.5ZM11 3.5C8.52 3.5 6.5 5.52 6.5 8C6.5 10.48 8.52 12.5 11 12.5C13.48 12.5 15.5 10.48 15.5 8C15.5 5.52 13.48 3.5 11 3.5Z'
const COMP_SVG =
  'M1.52998 17.65L2.86998 18.21V9.18L0.439977 15.04C0.0299771 16.06 0.519977 17.23 1.52998 17.65ZM21.03 13.95L16.07 1.98C15.76 1.23 15.03 0.77 14.26 0.75C14 0.75 13.73 0.79 13.47 0.9L6.09998 3.95C5.34998 4.26 4.88998 4.98 4.86998 5.75C4.85998 6.02 4.90998 6.29 5.01998 6.55L9.97998 18.52C10.29 19.28 11.03 19.74 11.81 19.75C12.07 19.75 12.33 19.7 12.58 19.6L19.94 16.55C20.96 16.13 21.45 14.96 21.03 13.95ZM11.83 17.75L6.86998 5.79L14.22 2.75H14.23L19.18 14.7L11.83 17.75Z'

const images = [
  'https://techsoluxdb.s3.us-east-1.amazonaws.com/file-1744564054593-441063258hrxby.png',
  'https://techsoluxdb.s3.us-east-1.amazonaws.com/file-1744564054593-441063258hrxby.png',
  'https://techsoluxdb.s3.us-east-1.amazonaws.com/file-1744564054593-441063258hrxby.png',
  'https://techsoluxdb.s3.us-east-1.amazonaws.com/file-1744564054593-441063258hrxby.png',
  'https://techsoluxdb.s3.us-east-1.amazonaws.com/file-1744564054593-441063258hrxby.png',
]

export default function ProductDetails({ navigation, route }: TsProps) {
  const { user } = useAuth()
  const [isLiked, setIsLiked] = useState(false)
  const { item } = route?.params || {}
  // Inside your component:
  const cartContext = useCart()
  const addToCart = cartContext?.addToCart
  const cart = cartContext?.cart
  const { allProducts } = useSearchContext()
  const similarProducts = allProducts.filter(
    (product) =>
      product._id !== item._id &&
      product.name.toLowerCase().includes(item.name.toLowerCase().split(' ')[0])
  )

  useEffect(() => {
    console.log('🔥 allProducts in this screen:', allProducts)
  }, [allProducts])

  const goToCart = (item: any) => {
    navigation.navigate(routes.CART, { item })
  }
  const buyNow = (item: any) => {
    navigation.navigate(routes.BUYNOW, { item })
  }

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const saveToWishlist = async (product: any) => {
    // Toggle the like state immediately for UI feedback
    setIsLiked((prev) => !prev)

    // Clear any existing debounce timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    // Set a new debounce timeout
    debounceTimeout.current = setTimeout(async () => {
      try {
        const response = await productApi.createWishlist({
          user: user?._id, // Replace with the actual user ID
          product: product._id,
          liked: !isLiked, // Send the new like state
        })
        // const response = await fetch(`${getApiUrl()}/wishlists`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(),
        // })
        if (!response.ok) {
          const errorData = await response.json()
          Alert.alert(
            'Error',
            errorData.message || 'Failed to update wishlist.'
          )
        }
      } catch (error) {
        console.error('Error saving to wishlist:', error)
        Alert.alert('Error', 'An error occurred while updating the wishlist.')
      }
    }, 500) // Delay of 500ms
  }

  const renderItem = () => null
  const ListHeaderItem = () => (
    <>
      <BasicHeader
        style={{ top: 15 }}
        leftIconStyle={-16}
        showRight
        showTitle={false}
        cartCount={cart?.[0]?.quantity ?? 0}
        onPress={() => navigation.goBack()}
        onRightIconPress={() => {
          addToCart?.(item)
        }}
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
          imageList={item?.image || images}
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
          rating={item?.rating?.average}
          totalReview={item?.rating?.count || 0}
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
            {item?.currencySymbol || currencySymbolRupee}
            {calculateListPrice(item?.price || 1500, item?.discount || 50)}
          </TsText>
          <TsText
            medium
            style={{
              lineHeight: 16,
              color: colors.black,
            }}
          >
            {item?.currencySymbol || currencySymbolRupee}
            {item?.price || 1500}
          </TsText>
          <TsText
            medium
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              lineHeight: 16,
              color: colors.secondary,
            }}
          >
            {item?.discount || 50}% Off
          </TsText>
        </BasicRowContainer>
        <TsText medium>Product Details</TsText>
        <MoreText
          text={
            item?.longDescription ||
            'Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the day'
          }
        />
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
          style={{ height: 40, marginVertical: 8 }}
        >
          <GoToCartBtn
            onPress={() => {
              addToCart?.(item)
              goToCart(item)
            }}
          />
          <BuyNowBtn onPress={() => buyNow(item)} />
          <Pressable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderRadius: 2,
            }}
            onPress={() => saveToWishlist(item)}
          >
            <SvgIcon
              path={PATH}
              width={32}
              height={29}
              stroke={isLiked ? colors.primary : colors.black}
              color={isLiked ? colors.primary : colors.white}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
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
        <RowContainer style={{ marginVertical: 8 }}>
          <BasicRowContainer
            gap={10}
            style={{
              width: 148,
              height: 48,
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
              left: -8,
              backgroundColor: colors.white,
            }}
          >
            <SvgIcon
              path={EYE_SVG}
              fill="#232327"
              width={22}
              height={16}
              color="#232327"
              style={{ left: 10 }}
            />
            <TsText
              medium
              style={{ left: 5 }}
            >
              View Similar
            </TsText>
          </BasicRowContainer>
          <BasicRowContainer
            gap={10}
            style={{
              width: 148,
              flex: 1,
              height: 48,
              borderRadius: 8,
              backgroundColor: colors.white,
              alignItems: 'center',
              right: -4,
            }}
          >
            <SvgIcon
              path={COMP_SVG}
              width={22}
              height={20}
              color="#323232"
              fill="#323232"
              style={{ left: 10 }}
            />
            <TsText
              medium
              style={{ left: 5 }}
            >
              Add to Compare
            </TsText>
          </BasicRowContainer>
        </RowContainer>
        <TsText
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 20,
            ligneHeight: 22,
          }}
        >
          Similar To
        </TsText>
        <FilterSortBanner
          title={`${allProducts.length - 1 || 1}+ Items`}
          textStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
        />
        {/* Similar Products */}
        <View style={{ marginTop: 8, marginBottom: 0 }}>
          <FlatList
            data={similarProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(item, index) =>
              item?._id?.toString() || index.toString()
            }
            contentContainerStyle={{ paddingBottom: 8, gap: 10 }}
          />
        </View>
      </MainContainer>
    </>
  )
  return (
    <BaseScreen>
      <FlatList
        data={[]}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderItem}
        contentContainerStyle={{ paddingBottom: 0 }}
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
