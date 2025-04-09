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
import TsText from '@/app/components/texts/TsText'
import routes from '@/app/navigation/routes'
import TsProps from '@/TsProps'
import ProductCard from '@/app/components/cards/ProductCard'

const RenderProduct = React.memo(({ item }: { item: any }) => {
  return <Text>{item.name}</Text>
})

export default function Whishlist({ navigation }: TsProps) {
  const { searchResults, searchTerm, setAllProducts } = useSearchContext()
  const isSearching = !!searchTerm
  const dataToShow = isSearching ? searchResults : products
  // const dataToShow = searchTerm ? searchResults : products

  const onAvatarPress = () => {
    navigation.navigate(routes.PROFILE)
  }

  const goToSearch = () => {
    navigation.navigate(routes.SEARCH, { searchTerm })
  }
  // const renderItem = ({ item }: { item: any }) => {
  //   return <RenderProduct item={item} /> }
  const renderItem = useCallback(
    ({ item }: { item: { id: number; name: string } }) => (
      <RenderProduct item={item} />
    ),
    []
  )

  useEffect(() => {
    setAllProducts(products) // ✅ store them globally once
  }, [])
  return (
    <BaseScreen>
      <MainContainer
        style={{ paddingLeft: 16, padding: 16, flex: 1, paddingBottom: 0 }}
      >
        <FlatList
          data={dataToShow}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{ paddingTop: 15, paddingBottom: -15, marginBottom: -15 }}
            >
              <ProductCard
                elevation={2}
                item={item}
                // imageHeight={110}
                lineHeight={20}
                width={160}
                height={260}
                descriptionFontSize={10}
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
                products={products}
                goToSearch={goToSearch}
              />
              <FilterSortBanner title={`52,082+ items`} />
            </>
          }
          contentContainerStyle={{
            paddingBottom: 15,

            // paddingHorizontal: 16, // ✅ Global horizontal padding here
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between', // ✅ Makes 2 cards spread out
            gap: 10,
          }}
          numColumns={2}
          // columnWrapperStyle={{
          //   justifyContent: 'space-between', // 👈 space out the two columns
          //   gap: 10,
          // }}
        />
      </MainContainer>
    </BaseScreen>
  )
}
