import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import TsText from '@/app/components/texts/TsText'

export default function SuccessfullPaymentContent() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/cog.png')}
        style={styles.iconWrapper}
      >
        {/* Icon goes here */}
        <Image
          source={require('@/assets/images/check.png')}
          style={styles.image}
        />
      </ImageBackground>
      <TsText
        medium
        style={styles.text}
      >
        Payment done successfully. 🎉
      </TsText>
      <View style={styles.dot1}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 14, height: 14 }}
        />
      </View>
      <View style={styles.dot2}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 14, height: 14 }}
        />
      </View>
      <View style={styles.dot3}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 7, height: 7 }}
        />
      </View>
      <View style={styles.dot4}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 11, height: 11 }}
        />
      </View>
      <View style={styles.dot5}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 7, height: 7 }}
        />
      </View>
      <View style={styles.dot6}>
        <Image
          source={require('@/assets/images/dot1.png')}
          style={{ width: 7, height: 7 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot1: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  dot2: {
    position: 'absolute',
    right: 40,
    top: 20,
  },
  dot3: {
    position: 'absolute',
    left: 30,
    top: 30,
  },
  dot4: {
    position: 'absolute',
    left: 30,
    top: 80,
  },
  dot5: {
    position: 'absolute',
    left: '45%',
    top: -15,
  },
  dot6: {
    position: 'absolute',
    right: 62,
    top: 65,
  },
  iconWrapper: {
    width: 91,
    height: 91,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 41,
    height: 27.5,
  },
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    lineHeight: 27,
  },
})
