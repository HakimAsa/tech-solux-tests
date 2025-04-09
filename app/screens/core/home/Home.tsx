import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import LogoHeader from '@/app/components/headers/LogoHeader'
import MainContainer from '@/app/containers'
import SearchBar from '@/app/components/SearchBar'
import products from '@/app/data/products'
import { useSearchContext } from '@/app/context/SearchContext'
import { FlatList } from 'react-native'
import FilterSortBanner from '@/app/components/FilterSortBanner'
import DealOfTheDayBanner from './DealOfTheDayBanner'
import Category from './Category'
import TrendingProductsBanner from './TrendingProductsBanner'
import ShopNow from './ShopNow'
import DealOfTheDayProduct from './DealOfTheDayProduct'
import TsProps from '@/TsProps'
import routes from '@/app/navigation/routes'
import SpecialOffer from './SpecialOffer'
import TrendingProduct from './TrendingProduct'
import HotSummerSale from './HotSummerSale'
import Sponsor from './Sponsor'
import SpecialOfferCard from './SpecialOfferCard'
import TsText from '@/app/components/texts/TsText'

const RenderProduct = React.memo(({ item }: { item: any }) => {
  return <Text>{item.name}</Text>
})

export default function Home({ navigation }: TsProps) {
  const { searchResults, searchTerm, setAllProducts } = useSearchContext()
  const isSearching = !!searchTerm
  const dataToShow = isSearching ? searchResults : products
  // const dataToShow = searchTerm ? searchResults : products

  const onDealOfDayPress = () => {
    Alert.alert('DEAL OF THE DAY', 'View them All')
  }
  const onTrendingProductPress = () => {
    Alert.alert('TRENDING PRODUCT', 'View them All')
  }
  const onAvatarPress = () => {
    navigation.navigate(routes.PROFILE)
  }

  const goToSearch = () => {
    navigation.navigate(routes.SEARCH, { searchTerm })
  }

  // renderItem function is used to render each item in the FlatList for founction purity
  const renderItem = useCallback(() => {
    return null
  }, []) // useCallback to memoize the renderItem function

  useEffect(() => {
    setAllProducts(products) // ✅ store them globally once
  }, [])
  return (
    <BaseScreen>
      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem} // null since navigating to Search Screen. Searched Products should not be displayed in home screen
        ListHeaderComponent={
          <View>
            <LogoHeader onAvatarPress={onAvatarPress} />
            <MainContainer
              style={{
                paddingLeft: 16,
                padding: 16,
                flex: 1,
              }}
            >
              <SearchBar
                products={products}
                goToSearch={goToSearch}
              />
              {/* Any other non-list sections can go here */}
              <FilterSortBanner />
              <Category />
              <ShopNow />
              <DealOfTheDayBanner onPress={onDealOfDayPress} />
              <DealOfTheDayProduct
                onDealOfDayItemPress={(item) =>
                  navigation.navigate(routes.PRODUCT_DETAILS, { item })
                }
              />
              <SpecialOffer />
              <SpecialOfferCard />
              <TrendingProductsBanner onPress={onTrendingProductPress} />
              <TrendingProduct
                onTrendingItemPress={(item) =>
                  navigation.navigate(routes.PRODUCT_DETAILS, { item })
                }
              />
              <HotSummerSale />
              <Sponsor />
            </MainContainer>
          </View>
        }
        contentContainerStyle={{
          paddingBottom: 32,
          paddingTop: 8,
        }}
        // ListHeaderComponentStyle={{
        //   marginVertical: 15,
        // }}
      />
    </BaseScreen>
  )
}
