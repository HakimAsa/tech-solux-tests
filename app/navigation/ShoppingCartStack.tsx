import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Checkout from '../screens/core/product/checkout/Checkout'
import Cart from '../screens/core/product/gottocart/Cart'
import routes from './routes'
import BuyNow from '../screens/core/product/buynow/BuyNow'

const Stack = createNativeStackNavigator()

export default function ShoppingCartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routes.CART}
        component={Cart}
      />
      <Stack.Screen
        name={routes.BUYNOW}
        component={BuyNow}
      />
      <Stack.Screen
        name={routes.CHECKOUT}
        component={Checkout}
      />
    </Stack.Navigator>
  )
}
