import { useRef, useState } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ViewToken,
  Pressable,
  Alert,
} from 'react-native'

import { WindowWidth } from '@/app/config/constants'

const images = [
  require('@/assets/images/shopnow.png'),
  require('@/assets/images/shopnow.png'),
  require('@/assets/images/shopnow.png'),
]

export default function ShopNow() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0)
      }
    }
  )

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
    minimumViewTime: 50,
    waitForInteraction: true,
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <Pressable
            style={styles.imageContainer}
            onPress={() =>
              Alert.alert('SHOP NOW', 'Aah!! Discounts are available. Hurry up')
            }
          >
            <Image
              source={item}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: WindowWidth,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 189,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 15, // 15px from image
    alignSelf: 'center',
    gap: 4,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#DEDBDB',
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#FFA3B3',
    width: 9,
    height: 9,
  },
})
