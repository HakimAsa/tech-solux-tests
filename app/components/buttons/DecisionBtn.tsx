import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TsButton from './TsButton'
import en from '@/app/config/en'
import { RowContainer } from '@/app/containers'
import colors from '@/app/config/colors'

export default function DecisionBtn({
  onCancel,
  onSave,
  leftText = en.cancel,
  rightText = en.save,
}: {
  onCancel: () => void
  onSave: () => void
  leftText?: string
  rightText?: string
}) {
  return (
    <RowContainer style={{ gap: 10 }}>
      <TsButton
        button={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          borderColor: colors.primary,
          borderWidth: 1,
        }}
        style={{ color: colors.black }}
        onPress={onCancel}
      >
        {leftText}
      </TsButton>
      <TsButton
        button={{ flex: 1 }}
        onPress={onSave}
      >
        {rightText}
      </TsButton>
    </RowContainer>
  )
}

const styles = StyleSheet.create({})
