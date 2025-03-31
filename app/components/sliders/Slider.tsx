import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { MaterialIcons } from '@expo/vector-icons'

import colors from '@/app/config/colors'
import en from '@/app/config/en'
import Pagination from './Pagination'
import SliderItem from './SliderItem'
import data from '@/app/data/presentation'
//   import Storage from '@/app/utils/Storage'
//   import TrButton from './common/buttons/TrButton'

export default function Slider() {
  //   const navigation = useNavigation()
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const flatListRef = useRef<FlatList>(null)
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event)
  }

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== undefined) {
        setCurrentPageIndex(viewableItems[0].index)
      }
    }
  ).current
  const viewabilityConfig = useRef({
    minimumViewTime: 50,
    waitForInteraction: true,
    itemVisiblePercentThreshold: 50,
  })

  const onStart = async () => {
    //   await Storage.storeData('startTdl', true)
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: en.home }], // Prevents back navigation
    //   }) // Skip this screen if start button on presentation Screen is pressed
    console.log('starting')
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        extraData={currentPageIndex} // 🔥 Ajouté pour éviter les bugs d'affichage
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SliderItem item={item} />}
        viewabilityConfig={viewabilityConfig.current}
      />
      <View
        style={{
          // position: 'absolute',
          bottom: 100,
          alignItems: 'center',
          justifyContent: 'center',
          // padding: 10,
          // marginBottom: 50,
        }}
      >
        <View style={{ position: 'absolute', bottom: -100 }}>
          <Pagination
            data={data}
            scrollX={scrollX}
            index={currentPageIndex}
            flatListRef={flatListRef}
            onGetStarted={() => console.log('Getstatred')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
