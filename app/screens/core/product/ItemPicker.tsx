import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicRowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import { Feather } from '@expo/vector-icons'

export default function ItemPicker({
  label,
  value,
  onPress,
}: {
  label?: string
  value?: string | number
  onPress?: () => void
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Feather
          name="chevron-down"
          size={20}
          style={{ position: 'absolute', right: 3, top: -5 }}
          color="#1C1B1F"
        />
      </Pressable>
      {/* <Text>Icon</Text> */}
      <BasicRowContainer
        gap={15}
        style={{ flex: 1, paddingHorizontal: 5, alignItems: 'center' }}
      >
        <TsText
          medium
          style={styles.label}
        >
          {label || 'Size'}
        </TsText>
        <TsText
          medium
          style={styles.value}
        >
          {value || 42}
        </TsText>
      </BasicRowContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    height: 25,
    width: 86,
  },
  label: {
    fontFamily: 'Montserrat_400Regular',
  },
  value: {
    letterSpacing: -1.2,
  },
})
