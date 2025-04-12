import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TsButton from '@/app/components/buttons/TsButton'
import colors from '@/app/config/colors'
import TsProps from '@/TsProps'
import routes from '@/app/navigation/routes'
import { CommonActions } from '@react-navigation/native'

export default function Confirmation({ route, navigation }: TsProps) {
  const { paymentMethod } = route.params // Get the selected payment method from route params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Confirmation</Text>
      <Text style={styles.message}>
        You have selected the {paymentMethod} payment method.
      </Text>
      <TsButton
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'TabNavigator', params: { screen: routes.HOME } },
              ],
            })
          )
        } // Navigate back to Home or another screen
        button={{
          marginTop: 20,
          backgroundColor: colors.primary,
        }}
      >
        Go to Home
      </TsButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
})
