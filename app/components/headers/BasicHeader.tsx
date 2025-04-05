import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TsText from '../texts/TsText'
import colors from '@/app/config/colors'
import { Feather } from '@expo/vector-icons'

export default function BasicHeader({
  onPress,
  title,
}: {
  onPress: () => void
  title: string
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
      <TsText style={styles.centeredTitle}>{title}</TsText>
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
})
