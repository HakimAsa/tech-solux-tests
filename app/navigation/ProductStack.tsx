import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'
import ChangePassword from '../screens/core/ChangePassword'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'
import ProductDetails from '../screens/core/product/ProductDetails'
import Cart from '../screens/core/product/Cart'
import BuyNow from '../screens/core/product/BuyNow'

const Stack = createNativeStackNavigator()

export default function ProductStack() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes.PRODUCT}
          component={ProductDetails}
        />
        <Stack.Screen
          name={routes.CART}
          component={Cart}
        />
        <Stack.Screen
          name={routes.BUYNOW}
          component={BuyNow}
        />
      </Stack.Navigator>
    </>
  )
}
