import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import TsText20 from '@/app/components/texts/TsText20'
import { RowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'

export default function Sponsor() {
  return (
    <View style={styles.container}>
      <TsText20 title="Sponsored" />
      <View style={styles.imageWrapper}>
        <View style={styles.image}>
          <Image
            source={require('@/assets/images/sponsor.png')}
            style={{ width: '100%', height: '100%' }}
            onLoadEnd={() => console.log('Image loaded')}
          />
        </View>
      </View>
      <RowContainer style={{ top: -70, paddingTop: 10 }}>
        <TsText style={{ fontFamily: 'Montserrat_700Bold' }}>
          up to 50% Off
        </TsText>
        <Pressable onPress={() => alert('Sponsored')}>
          <Image
            source={require('@/assets/images/chevronright.png')}
            style={{ width: 20, height: 20 }}
          />
        </Pressable>
      </RowContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 354,
    height: 374,
    padding: 16,
    paddingTop: 8,
    paddingLeft: 8,
    marginTop: 15,
    gap: 10,
  },
  image: {
    width: 351,
    height: 292,
    borderRadius: 8,
    backgroundColor: '#C4C4C4',
    overflow: 'hidden',
  },
  imageWrapper: {
    width: 354,
    height: 354,
    borderRadius: 8,
    top: 2,
  },
})
