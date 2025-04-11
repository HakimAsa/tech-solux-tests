import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import colors from '@/app/config/colors'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import BasicHeader from '@/app/components/headers/BasicHeader'
import en from '@/app/config/en'
import TsProps from '@/TsProps'

export default function Checkout({ navigation }: TsProps) {
  return (
    <ScrollableMainContainer
      contentContainerStyle={{
        backgroundColor: colors.white,
        paddingBottom: 146, // Add padding equal to the height of TsBottomTab
      }}
      style={{ backgroundColor: colors.white }}
    >
      <BaseScreen style={{ backgroundColor: colors.white }}>
        <BasicHeader
          onPress={() => navigation.goBack()}
          onRightIconPress={() => console.log('liked it')}
          title={en.checkout}
          leftIconStyle={-22}
        />
        <MainContainer
          style={{
            padding: 33,
            paddingLeft: 33,
            backgroundColor: colors.white,
          }}
        ></MainContainer>
      </BaseScreen>
    </ScrollableMainContainer>
  )
}

const styles = StyleSheet.create({})
