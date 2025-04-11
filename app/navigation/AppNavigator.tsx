import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from '../screens/core/GetStarted'
import TabNavigator from './TabNavigator'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Cart from '../screens/core/product/gottocart/Cart'
import BuyNow from '../screens/core/product/buynow/BuyNow'

import {
  getFocusedRouteNameFromRoute,
  useNavigationState,
} from '@react-navigation/native'
import { View } from 'react-native'
function getTabBarStyle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
  // Dynamically hide the tab bar for specific screens
  return {
    display:
      routeName === routes.BUYNOW || routeName === routes.CART
        ? 'none'
        : 'flex',
  }
}
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
        children={({ route }) => {
          console.log(route)
          const state = useNavigationState((state) => state)
          const currentRouteName = state.routes[state.index]?.name
          // Determine if the tab bar should be hidden
          const shouldHideTabBar =
            currentRouteName === routes.BUYNOW ||
            currentRouteName === routes.CART

          return <TabNavigator shouldHideTabBar={shouldHideTabBar} />
        }}
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
        options={{
          headerShown: false,
          presentation: 'modal', // Optional: Use modal presentation for BuyNow
        }}
      />
    </Stack.Navigator>
  )
}
