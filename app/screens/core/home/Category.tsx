import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import { Image } from 'react-native'
import { ImageSourcePropType } from 'react-native'
import TsText from '@/app/components/texts/TsText'

interface CategoryProps {
  item: {
    id: number
    name: string
    image: ImageSourcePropType
  }
}

export default function Category() {
  const categories = [
    { id: 1, name: 'Beauty', image: require('@/assets/images/beauty.png') },
    { id: 2, name: 'Fashion', image: require('@/assets/images/fashion.png') },
    { id: 3, name: 'Kids', image: require('@/assets/images/kids.png') },
    { id: 4, name: 'Mens', image: require('@/assets/images/mens.png') },
    { id: 5, name: 'Womens', image: require('@/assets/images/womens.png') },
  ]
  const renderCategoryItem = ({ item }: CategoryProps) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{ width: 56, height: 56 }}
        />
        <TsText style={styles.text}>{item.name}</TsText>
      </View>
    )
  }
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        backgroundColor: colors.white,
        marginVertical: 15,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 87,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular',
    color: colors.darkbag,
  },
})
