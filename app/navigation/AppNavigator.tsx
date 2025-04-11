import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from '../screens/core/GetStarted'
import TabNavigator from './TabNavigator'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Cart from '../screens/core/product/Cart'
import BuyNow from '../screens/core/product/BuyNow'

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
      <Stack.Screen
        name={routes.PROFILE}
        component={Profile}
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
  )
}
