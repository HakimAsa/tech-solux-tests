import { ImageSourcePropType, View } from 'react-native'
import { useEffect, useState } from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import LogoHeader from '@/app/components/headers/LogoHeader'
import MainContainer from '@/app/containers'
import SearchBar from '@/app/components/SearchBar'
import { useSearchContext } from '@/app/context/SearchContext'
import { FlatList } from 'react-native'
import FilterSortBanner from '@/app/components/FilterSortBanner'
import routes from '@/app/navigation/routes'
import TsProps from '@/TsProps'
import ProductCard from '@/app/components/cards/ProductCard'
import { ScreenWidth } from '@/app/config/constants'

import productApi from '@/app/api/products'

// Put this outside of the component for reuse
type Product = {
  _id: string
  price: number
  image: string[] | ImageSourcePropType
  name?: string
  description?: string
  discount?: number
  currencySymbol?: string
  rating?: {
    average: number
    count: number
  }
}

export default function Whishlist({ navigation }: TsProps) {
  const { searchTerm, allProducts } = useSearchContext()
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchWishlist()
  }, [])

  const fetchWishlist = async () => {
    try {
      const response = await productApi.getUserWishlist()
      if (!response?.ok) {
        throw new Error('Failed to fetch wishlist')
      }
      const data = response.data
      setWishlistProducts(
        data.map((product: Product) => ({
          ...product,
          price: product.price ?? 0, // Ensure price is a number
          image:
            Array.isArray(product.image) && product.image.length > 0
              ? product.image
              : ['default-image-url'], // Ensure image is a non-empty array
          name: product.name ?? 'Unnamed Product', // Ensure name is defined
        }))
      ) // assuming this returns an array of product objects
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    }
  }

  const onAvatarPress = () => {
    navigation.navigate(routes.PROFILE)
  }

  const goToSearch = () => {
    navigation.navigate(routes.SEARCH, { searchTerm })
  }

  return (
    <BaseScreen>
      <MainContainer
        style={{ paddingLeft: 16, padding: 16, flex: 1, paddingBottom: 0 }}
      >
        <FlatList
          data={wishlistProducts}
          keyExtractor={(item, index) =>
            item?._id?.toString() || index.toString()
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{ paddingTop: 15, paddingBottom: -15, marginBottom: -15 }}
            >
              <ProductCard
                elevation={2}
                item={item}
                lineHeight={20}
                width={ScreenWidth}
                height={260}
                descriptionFontSize={10}
                onPress={() =>
                  navigation.navigate(routes.PRODUCT_DETAILS, { item })
                }
              />
            </View>
          )}
          ListHeaderComponent={
            <>
              <LogoHeader
                onAvatarPress={onAvatarPress}
                style={{ paddingLeft: -16 }}
              />

              <SearchBar
                products={allProducts}
                goToSearch={goToSearch}
              />
              <FilterSortBanner
                title={`${
                  wishlistProducts.length > 0 ? wishlistProducts.length - 1 : 1
                }+ items`}
              />
            </>
          }
          contentContainerStyle={{
            paddingBottom: 15,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          numColumns={2}
        />
      </MainContainer>
    </BaseScreen>
  )
}
