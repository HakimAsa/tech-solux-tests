import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import GetStarted from '../screens/core/GetStarted'
import TabNavigator from './TabNavigator'
import routes from './routes'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name={routes.WELCOME}
        component={GetStarted}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
