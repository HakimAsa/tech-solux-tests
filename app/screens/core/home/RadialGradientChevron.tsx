import React from 'react'
import { View, Pressable, StyleSheet, Image } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

export default function RadialShadowChevron({
  onPress,
}: {
  onPress: () => void
}) {
  return (
    <Pressable
      style={styles.chevronWrapper}
      onPress={onPress}
    >
      {/* Radial Gradient Background */}
      <Svg
        height="40"
        width="40"
        style={StyleSheet.absoluteFill}
      >
        <Defs>
          <RadialGradient
            id="grad"
            cx="48.98%"
            cy="51.02%"
            rx="96.94%"
            ry="96.94%"
            fx="48.98%"
            fy="51.02%"
          >
            <Stop
              offset="0%"
              stopColor="#BBBBBB"
              stopOpacity="1"
            />
            <Stop
              offset="100%"
              stopColor="#BBBBBB"
              stopOpacity="0"
            />
          </RadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#grad)"
        />
      </Svg>

      {/* Fake Inset Shadows via Border Layers */}
      <View style={styles.insetShadowTopLeft} />
      <View style={styles.insetShadowBottomRight} />

      {/* Chevron Icon */}
      <Image
        source={require('@/assets/images/chevronright.png')}
        style={{
          width: 28,
          height: 35,
        }}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  chevronWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  insetShadowTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'transparent',
    shadowColor: '#C4C4C4',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
    zIndex: -1,
  },

  insetShadowBottomRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: 'transparent',
    shadowColor: '#DEDBDB',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
    zIndex: -1,
  },
})
