import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/core/Profile'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'
import Home from '../screens/core/home/Home'
import Search from '../screens/core/Search'
import Whishlist from '../screens/core/Whishlist'
import routes from './routes'
import ProductDetails from '../screens/core/product/ProductDetails'

const Stack = createNativeStackNavigator()

export default function WhishlistStack() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes.WHISHLIST}
          component={Whishlist}
        />
        <Stack.Screen
          name={routes.SEARCH}
          component={Search}
        />
        <Stack.Screen
          name="HomeFromWhislist"
          component={Home}
        />
        <Stack.Screen
          name={routes.PROFILE}
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
