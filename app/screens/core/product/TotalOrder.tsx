import { StyleSheet, View } from 'react-native'
import OrderAmount from './OrderAmount'

export default function TotalOrder({ amount = 0 }: { amount?: number }) {
  return (
    <View style={styles.container}>
      <OrderAmount
        label="Order Total"
        labelStyle={styles.label}
        amount={amount}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 51,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    letterSpacing: -0.7,
  },
})
