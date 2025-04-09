import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import MainContainer from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import TsProps from '@/TsProps'

export default function ProductDetails({ navigation, route }: TsProps) {
  const { item } = route?.params || {}
  return (
    <BaseScreen>
      <BasicHeader
        leftIconStyle={-16}
        showRight
        showTitle={false}
        onPress={() => navigation.goBack()}
        rightIconStyle={{
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          overflow: 'hidden',
        }}
      />
      <MainContainer style={{ paddingLeft: 16, padding: 16, paddingBottom: 0 }}>
        <Text>{item?.name}</Text>
      </MainContainer>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
