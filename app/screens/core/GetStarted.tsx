import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import TsButton from '@/app/components/buttons/TsButton'
import TsProps from '@/TsProps'

export default function GetStarted({ navigation }: TsProps) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('@/assets/images/getstarted.png')}
    >
      <View style={styles.main}>
        <View style={styles.topSection}>
          <TsText style={styles.tagline}>
            {'You want\n Authentic, here\n you go!'}
          </TsText>
          <TsText style={styles.subtagline}>Find it here, buy it now!</TsText>
        </View>

        <View style={styles.bottomSection}>
          <TsButton
            onPress={() => navigation.navigate('TabNavigator')}
            button={{
              width: 279,
            }}
          >
            Get Started
          </TsButton>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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

  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.63)',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    flex: 1,
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: 45,
  },
})
