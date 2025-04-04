import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import TsButton from '@/app/components/buttons/TsButton'
import { getPercentage } from '@/app/config/constants'
import TsProps from '@/TsProps'
import routes from '@/app/navigation/routes'

export default function GetStarted({ navigation }: TsProps) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('@/assets/images/getstarted.png')}
    >
      <View style={styles.main}>
        <View style={styles.layout}>
          <TsText style={styles.tagline}>
            {'You want\n Authentic, here\n you go!'}
          </TsText>
        </View>
        <View style={styles.sublayout}>
          <TsText style={styles.subtagline}>Find it here, buy it now!</TsText>
        </View>
        <TsButton
          onPress={() => navigation.navigate('TabNavigator')}
          button={{
            width: 279,
            top: getPercentage(755),
            left: 55,
            position: 'absolute',
          }}
        >
          Get Started
        </TsButton>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.63)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  layout: {
    position: 'absolute',
    width: 315,
    height: 123,
    top: getPercentage(552),
    left: 37,
  },
  sublayout: {
    position: 'absolute',
    width: 315,
    height: 22,
    top: getPercentage(689),
    left: 37,
  },
  subtagline: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    lineHeight: 24.64,
    color: '#F2F2F2',
    textAlign: 'center',
  },
  tagline: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 34,
    lineHeight: 34,
    color: colors.white,
    textAlign: 'center',
  },
})
