import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import LogoHeader from '@/app/components/headers/LogoHeader'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import SearchBar from '@/app/components/SearchBar'
import products from '@/app/data/products'
import { useSearchContext } from '@/app/context/SearchContext'
import { FlatList } from 'react-native'
import FilterSortBanner from '@/app/components/FilterSortBanner'
import DayOfDealBanner from './DayOfDealBanner'
import Category from './Category'

export default function Home() {
  const { searchResults, searchTerm } = useSearchContext()
  const dataToShow = searchTerm ? searchResults : products
  return (
    <BaseScreen>
      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        ListHeaderComponent={
          <>
            <LogoHeader />
            <MainContainer
              style={{
                paddingLeft: 16,
                padding: 16,
                backgroundColor: '#FDFDFD',
                flex: 1,
              }}
            >
              <SearchBar products={products} />
              {/* Any other non-list sections can go here */}
              <FilterSortBanner />
              <Category />
              <DayOfDealBanner />
            </MainContainer>
          </>
        }
        contentContainerStyle={{
          paddingBottom: 32,
          paddingTop: 8,
        }}
      />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
