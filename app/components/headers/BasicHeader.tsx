import { Pressable, StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import TsText from '../texts/TsText'
import colors from '@/app/config/colors'
import { Feather } from '@expo/vector-icons'

export default function BasicHeader({
  onPress,
  title,
  iconName,
  rightIconStyle,
  showTitle = true,
  showRight = false,
}: {
  onPress: () => void
  title?: string
  rightIconStyle?: ViewProps['style']
  showTitle?: boolean
  showRight?: boolean
  iconName?: keyof typeof Feather.glyphMap
}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.icon}
      >
        <Feather
          name="chevron-left"
          size={30}
          color={colors.black}
        />
      </Pressable>
      {showTitle && <TsText style={styles.centeredTitle}>{title}</TsText>}

      {showRight && (
        <Pressable
          onPress={onPress}
          style={[styles.righIcon, rightIconStyle]}
        >
          <Feather
            name={iconName || 'shopping-cart'}
            size={20}
            color={colors.black}
          />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 56,
  },
  icon: {
    position: 'absolute',
    left: 0,
    paddingLeft: 22,
  },
  centeredTitle: {
    color: colors.black,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 22,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }], // This centers the element horizontally
  },
  righIcon: {
    // color: colors.black,
    // fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 22,
    position: 'absolute',
    left: '100%',
    transform: [{ translateX: -50 }], // This centers the element horizontally
  },
})
