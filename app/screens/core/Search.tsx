import { FlatList } from 'react-native'
import React from 'react'

import TsText from '@/app/components/texts/TsText'
import { useSearchContext } from '@/app/context/SearchContext'
import SearchBar from '@/app/components/SearchBar'
import BaseScreen from '@/app/components/BaseScreen'
import ProductCard from '@/app/components/cards/ProductCard'
import MainContainer from '@/app/containers'
import { ScreenWidth } from '@/app/config/constants'
import BasicHeader from '@/app/components/headers/BasicHeader'
import TsProps from '@/TsProps'
export default function Search({ navigation }: TsProps) {
  const { searchResults, searchTerm } = useSearchContext()

  const imageSizeDelta = 117 // base on figma design

  return (
    <BaseScreen>
      <BasicHeader
        title="Search"
        onPress={() => navigation.goBack()}
      />
      <MainContainer
        style={{
          paddingLeft: 16,
          padding: 16,
          flex: 1,
        }}
      >
        <SearchBar products={searchResults} />

        <TsText style={{ fontWeight: 'bold', marginVertical: 12 }}>
          Search results for "{searchTerm}"
        </TsText>
        {searchTerm.length === 0 ? (
          <TsText
            small
            style={{ color: 'gray' }}
          >
            No results found.
          </TsText>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                width={ScreenWidth}
                height={ScreenWidth}
                imageHeight={ScreenWidth - imageSizeDelta}
              />
            )}
            contentContainerStyle={{ paddingHorizontal: 0 }} // Add padding around the grid}}
            // numColumns={2}
            // columnWrapperStyle={{
            //   justifyContent: 'space-between', // Add space between items in a row
            //   // marginBottom: 16, // Add vertical gap between rows
            // }}
          />
        )}
      </MainContainer>
    </BaseScreen>
  )
}
