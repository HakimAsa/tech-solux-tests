import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import TsText from '../texts/TsText'
import en from '@/app/config/en'

interface SliderItemProps {
  imageStyle?: object
  item: Record<any, any>
}

export default function SliderItem({ imageStyle, item }: SliderItemProps) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={item.image}
        style={[
          styles.image,
          {
            width: item.width || 300,
            height: item.height || 300,
            left: item.left || 37,
            top: item.top || 177,
            position: 'absolute',
            transform: item.transform || [{ rotate: '0deg' }],
          },
          imageStyle,
        ]}
      />
      <View style={styles.details}>
        <TsText
          style={{
            fontFamily: 'Montserrat_800ExtraBold',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          {item.title}
        </TsText>

        <TsText
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 14,
            textAlign: 'center',
            color: '#A8A8A9',
            lineHeight: 24,
          }}
        >
          {item.description}
        </TsText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    position: 'absolute',
  },
  details: {
    position: 'absolute',
    top: 492,
    left: 17,
    height: 111,
    width: 340,
  },
})
