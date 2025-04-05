import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '@/app/components/BaseScreen'
import LogoHeader from '@/app/components/headers/LogoHeader'

export default function Home() {
  return (
    <BaseScreen>
      <LogoHeader />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
