import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'
import ChangePassword from '../screens/core/ChangePassword'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'
import Home from '../screens/core/home/Home'
import Search from '../screens/core/Search'
import ProductDetails from '../screens/core/product/ProductDetails'
import Cart from '../screens/core/product/gottocart/Cart'
import BuyNow from '../screens/core/product/buynow/BuyNow'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes.HOME}
          component={Home}
        />
        <Stack.Screen
          name={routes.SEARCH}
          component={Search}
        />
        <Stack.Screen
          name="HomeFromProfile"
          component={Profile}
        />
        <Stack.Screen
          name={routes.PRODUCT_DETAILS}
          component={ProductDetails}
        />

        {/* continue with needed screens later */}
      </Stack.Navigator>
    </>
  )
}
