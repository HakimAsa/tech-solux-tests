import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useRef } from 'react'
import ProductCard from '@/app/components/cards/ProductCard'
import RadialGradientChevron from './RadialShadowChevron'
import useApi from '@/app/hooks/useApi'
import productApi from '@/app/api/products'
import TsActivityIndicator from '@/app/components/loader/TsActivityIndicator'
import ErrorMessages from '@/app/components/forms/ErrorMessages'

export default function TrendingProduct({
  onTrendingItemPress,
}: {
  onTrendingItemPress?: (item: any) => void
}) {
  const {
    data: trendingProducts = [],
    error,
    loading,
    message,
    request: getTopRatedProducts,
  } = useApi<Array<any>, any>(productApi.getTopRatedProducts)
  const flatListRef = useRef<FlatList>(null)

  const ITEM_WIDTH = 170
  const SPACING = 10
  const scrollX = useRef(0)

  const scrollRight = () => {
    const maxOffset =
      ((trendingProducts?.length || 0) - 1) * (ITEM_WIDTH + SPACING)
    const nextOffset = Math.min(
      scrollX.current + ITEM_WIDTH + SPACING,
      maxOffset
    )

    flatListRef.current?.scrollToOffset({ offset: nextOffset, animated: true })
  }
  useEffect(() => {
    const fetchTopRated = async () => {
      await getTopRatedProducts()
    }

    fetchTopRated()
  }, [])

  return (
    <>
      {loading ? (
        <TsActivityIndicator visible={loading} />
      ) : (
        <>
          <ErrorMessages
            visible={error}
            error={message || ''}
          />
          <View style={styles.container}>
            <FlatList
              ref={flatListRef}
              data={trendingProducts}
              renderItem={({ item }) => (
                <ProductCard
                  showName={false}
                  showStar={false}
                  width={142}
                  height={186}
                  imageHeight={100}
                  item={item}
                  nameFontSize={12}
                  descriptionFontSize={10}
                  onPress={() => onTrendingItemPress?.(item)}
                />
              )}
              onScroll={(e) => {
                scrollX.current = e.nativeEvent.contentOffset.x
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) =>
                item?._id?.toString() || index.toString()
              }
              contentContainerStyle={styles.listContent}
            />

            {/* Next button at right angle in the middle */}
            <View style={styles.chevron}>
              <RadialGradientChevron onPress={scrollRight} />
            </View>
          </View>
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginBottom: 0,
  },
  chevron: {
    width: 40,
    height: 40,
    // backgroundColor: '#BBBBBB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    position: 'absolute',

    // optional extra "light" shadow on opposite side
    // simulate dual inset shadows manually
    borderWidth: 1,
    borderColor: '#DEDBDB',
    right: 0,
    // padding: 5,
  },
  listContent: {
    gap: 10,
  },
  // rightChevron: {
  //   width: 24,
  //   height: 24,
  //   borderRadius: 68,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   backgroundColor: '#DEDBDB',
  //   elevation: -6,
  //   // right: 0,
  // },
})
