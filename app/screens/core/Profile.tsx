import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import MainContainer from '@/app/containers'

export default function Profile() {
  return (
    <BaseScreen>
      <MainContainer style={{ padding: 24, paddingLeft: 24 }}>
        <Text>Profile</Text>
      </MainContainer>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
