import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@/app/components/sliders/Slider'
import TsProps from '@/TsProps'

export default function Presentation({ navigation }: TsProps) {
  return <Slider navigation={navigation} />
}

const styles = StyleSheet.create({})
