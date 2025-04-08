import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/app/config/colors'
import { BasicRowContainer, RowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import en from '@/app/config/en'

export default function HotSummerSale({ onPress }: { onPress?: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('@/assets/images/hotsummersale.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <RowContainer style={styles.details}>
        <View>
          <TsText style={styles.newArrival}>New Arrivals</TsText>
          <TsText style={styles.summer}>Summer’ 25 Collections</TsText>
        </View>
        <Pressable
          style={styles.viewAll}
          onPress={
            onPress || (() => Alert.alert('HOT SUMMER SALE', 'View all'))
          }
        >
          <BasicRowContainer
            style={{ height: 16, alignItems: 'center' }}
            gap={2}
          >
            <TsText
              small
              style={{
                color: colors.white,
                fontFamily: 'Montserrat_600SemiBold',
                lineHeight: 16,
                alignSelf: 'center',
              }}
            >
              {en.viewAll}
            </TsText>

            <Image
              source={require('@/assets/images/leftarrow.png')}
              style={{ width: 16, height: 16 }}
            />
          </BasicRowContainer>
        </Pressable>
      </RowContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 343,
    height: 270,
    borderRadius: 8,
    marginTop: 5,
  },
  details: {
    top: -35,
    padding: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '100%',
    height: 240,
    top: -20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  newArrival: {
    fontSize: 20,
    lineHeight: 22,
  },
  summer: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 20,
  },
  viewAll: {
    width: 89,
    height: 28,
    backgroundColor: colors.primary,
    borderRadius: 4,
    padding: 10,
    top: 15,
    paddingTop: 6,
    paddingBottom: 6,
  },
})
