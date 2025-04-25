import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'
import Home from '../screens/core/home/Home'
import Search from '../screens/core/Search'
import ProductDetails from '../screens/core/product/ProductDetails'
import ProfileStack from './ProfileStack'

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
          name={routes.PROFILE}
          component={ProfileStack}
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
