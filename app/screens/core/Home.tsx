import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import LogoHeader from '@/app/components/headers/LogoHeader'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import SearchBar from '@/app/components/SearchBar'

export default function Home() {
  return (
    <ScrollableMainContainer
      contentContainerStyle={{
        flexGrow: 1,
        // borderColor: 'green',
        borderRightWidth: 5,
      }}
    >
      <BaseScreen>
        <LogoHeader />
        <MainContainer
          style={{
            paddingLeft: 16,
            padding: 16,
            backgroundColor: '#FDFDFD',
            flex: 0,
          }}
        >
          {/* Your home screen components here */}
          <SearchBar />
        </MainContainer>
      </BaseScreen>
    </ScrollableMainContainer>
  )
}

const styles = StyleSheet.create({})
