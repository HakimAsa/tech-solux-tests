import {
  FlatList,
  StyleSheet,
  View,
  ViewToken,
  Alert,
  Image,
} from 'react-native'
import { useRef, useState } from 'react'

import RadialShadowChevron from '@/app/screens/core/home/RadialShadowChevron'
import TsText from '../texts/TsText'
import colors from '@/app/config/colors'
import Cta from '../buttons/Cta'

const images = [
  require('@/assets/images/shopnow.png'),
  require('@/assets/images/shopnow.png'),
  require('@/assets/images/shopnow.png'),
]

interface ImageSliderProps {
  activeDotSize?: number
  dotColor?: string
  imageList?: any[]
  showRightChevron?: boolean
  showLeft?: boolean
}

export default function ImageSlider({
  activeDotSize,
  dotColor,
  imageList = images,
  showRightChevron = false,
  showLeft = false,
}: ImageSliderProps) {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <>
        <View style={styles.imageContainer}>
          <Image
            source={item}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        {showLeft && (
          <View style={{ position: 'absolute', top: '25%', left: 30 }}>
            <TsText
              style={{
                fontFamily: 'Montserrat_700Bold',
                lineHeight: 22,
                fontSize: 20,
                color: colors.white,
              }}
            >
              50-40% OFF
            </TsText>
            <TsText
              small
              style={{
                fontFamily: 'Montserrat_400Regular',
                lineHeight: 16,
                color: colors.white,
              }}
            >
              Now in (product)
            </TsText>
            <TsText
              small
              style={{
                fontFamily: 'Montserrat_400Regular',
                lineHeight: 16,
                color: colors.white,
              }}
            >
              All colours
            </TsText>

            <Cta
              text="Shop Now"
              style={{
                backgroundColor: 'transparent',
                borderColor: colors.white,
                borderWidth: 1,
                width: 100,
                height: 32,
                borderRadius: 6,
              }}
              onPress={() => Alert.alert('GOOD DISCOUNT', 'Shop Now Pressed')}
            />
          </View>
        )}
        {showRightChevron && (
          <View style={{ position: 'absolute', top: '45%', right: 25 }}>
            <RadialShadowChevron onPress={() => alert('ok')} />
          </View>
        )}
      </>
    )
  }
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
        data={imageList}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={renderItem}
        // contentContainerStyle={{
        //   paddingHorizontal: 16,
        // }}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {imageList.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && {
                ...styles.activeDot,
                width: activeDotSize || 9,
                height: activeDotSize || 9,
                borderRadius: 100,
                backgroundColor: dotColor || '#FFA3B3',
              },
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginTop: 0,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    width: 9,
    height: 9,
  },
})
