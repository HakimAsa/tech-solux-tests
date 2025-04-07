import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { useRef, useState } from 'react'
import colors from '@/app/config/colors'
import products from '@/app/data/products'
import ProductCard from '@/app/components/cards/ProductCard'
import RadialGradientChevron from './RadialGradientChevron'

export default function DealOfTheDayProduct() {
  const [index, setIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  // const scrollRight = () => {
  //   if (index < products.length - 1) {
  //     const newIndex = index + 1
  //     setIndex(newIndex)
  //     flatListRef.current?.scrollToIndex({
  //       index: newIndex,
  //       animated: true,
  //     })
  //   }
  //   // flatListRef?.current?.scrollToOffset({
  //   //   offset: 200, // change as needed (scrolls 200px to the right)
  //   //   animated: true,
  //   // })
  // }
  const ITEM_WIDTH = 170
  const SPACING = 10
  const scrollX = useRef(0)

  const scrollRight = () => {
    const maxOffset = (products.length - 1) * (ITEM_WIDTH + SPACING)
    const nextOffset = Math.min(
      scrollX.current + ITEM_WIDTH + SPACING,
      maxOffset
    )

    flatListRef.current?.scrollToOffset({ offset: nextOffset, animated: true })
  }
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            nameFontSize={12}
            descriptionFontSize={10}
          />
        )}
        onScroll={(e) => {
          scrollX.current = e.nativeEvent.contentOffset.x
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />

      {/* Next button at right angle in the middle */}
      <View style={styles.chevron}>
        <RadialGradientChevron onPress={scrollRight} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
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
    elevation: 1,
    backgroundColor: colors.white,
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
