import { StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { BasicRowContainer } from '@/app/containers'
import { Image } from 'react-native'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'

export default function DetailBtn({
  iconName,
  text,
}: {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap
  text: string
}) {
  return (
    <BasicRowContainer style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={14}
        color={colors.shadeBlackGray3}
      />
      <TsText style={styles.text}>{text}</TsText>
    </BasicRowContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginVertical: 8,
    height: 24,
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.shadeBlackGray3,
  },
  image: {
    width: 16,
    height: 16,
  },
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 10,
    color: colors.shadeBlackGray3,
    lineHeight: 16,
  },
})
