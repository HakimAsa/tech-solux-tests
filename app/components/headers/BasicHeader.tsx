import { Pressable, StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import TsText from '../texts/TsText'
import colors from '@/app/config/colors'
import { Feather } from '@expo/vector-icons'

export default function BasicHeader({
  onPress,
  onRightIconPress,
  title,
  iconName,
  rightIconStyle,
  leftIconStyle,
  style,
  showTitle = true,
  showRight = false,
  cartCount = 0, // Add cartCount prop to display the badge
}: {
  onPress: () => void
  onRightIconPress?: () => void
  title?: string
  leftIconStyle?: number
  rightIconStyle?: ViewProps['style']
  showTitle?: boolean
  showRight?: boolean
  iconName?: keyof typeof Feather.glyphMap
  style?: ViewProps['style']
  cartCount?: number // Add cartCount prop to display the badge
}) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        style={[styles.icon, { left: leftIconStyle || 0 }]}
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
          onPress={onRightIconPress}
          style={[styles.righIcon, rightIconStyle]}
        >
          <Feather
            name={iconName || 'shopping-cart'}
            size={20}
            color={colors.black}
          />
          {cartCount >= 0 && (
            <View style={styles.badge}>
              <TsText style={styles.badgeText}>{cartCount}</TsText>
            </View>
          )}
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 0,
    right: 8,
    backgroundColor: colors.primary,
    borderRadius: 7,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 8,
  },
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
