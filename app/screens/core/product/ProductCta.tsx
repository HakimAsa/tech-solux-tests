import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BasicRowContainer } from '@/app/containers'
import SvgIcon from '@/app/components/icons/SvgIcon'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import en from '@/app/config/en'

interface ProductCtaProps {
  colors?: readonly [string, string, ...string[]]
  innerWidth?: number
  iconWidth?: number
  iconHeight?: number
  iconPath?: string
  title?: string
}

export default function ProductCta({
  colors,
  innerWidth,
  iconWidth,
  iconHeight,
  iconPath,
  title = en.goToCart,
}: ProductCtaProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors || ['#EFAD18', '#F8D7B4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.innerContainer,
          {
            width: innerWidth || 137,
            height: 40,
          },
        ]}
      >
        <BasicRowContainer
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <View style={styles.vectorIcon}>
            <SvgIcon
              width={iconWidth}
              height={iconHeight}
              path={iconPath}
            />
          </View>
          <TsText
            style={[
              styles.text,
              //   { left: innerWidth ? innerWidth - 40 - 80 : 17 },
            ]}
          >
            {title}
          </TsText>
        </BasicRowContainer>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 137,
    height: 40,
  },
  innerContainer: {
    width: 137,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  text: {
    color: colors.white,
    lineHeight: 20,
    left: 44, // figmaLeft(64) - [textWidth(80) - iconWidth(40)]: 64 - 40=44
  },
  vectorIcon: {
    position: 'absolute',
    left: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    elevation: 100,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.15)', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Offset for iOS shadow
    shadowOpacity: 0.3, // Opacity for iOS shadow
    shadowRadius: 4, // Blur radius for iOS shadow
  },
})
