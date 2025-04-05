import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import TsText from '../texts/TsText'
import en from '@/app/config/en'

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert('humburger')}
      >
        <Image
          style={styles.menuImage}
          alt="humberger"
          source={require('@/assets/images/menu.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => alert('logo')}
      >
        <Image
          style={styles.logo}
          resizeMode="contain"
          alt="logo"
          source={require('@/assets/images/logo.png')}
        />
        <TsText style={styles.stylish}>{en.stylish}</TsText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('avatar')}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 24,
          }}
          alt="avatar"
          source={require('@/assets/images/avatar.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  logo: {
    // width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 111.78,
    height: 31.03,
  },
  menuContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuImage: {
    width: 24,
    height: 24,
  },
  stylish: {
    fontSize: 18,
    color: '#4392F9',
    marginLeft: -8,
    lineHeight: 22,
    // textTransform: 'uppercase',
    // letterSpacing: 0.5,
    fontFamily: 'LibreCaslonText_700Bold',
  },
})
