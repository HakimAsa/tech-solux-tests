import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import colors from '../config/colors'
import Search from '../screens/core/Search'
import routes from './routes'
import WhishlistStack from './WhishlistStack'
import HomeStack from './HomeStack'

const Stack = createNativeStackNavigator()

export default function SearchStack() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes.SEARCH}
          component={Search}
        />
        <Stack.Screen
          name={routes.WHISHLIST}
          component={WhishlistStack}
        />

        <Stack.Screen
          name={routes.HOME}
          component={HomeStack}
        />
        {/* continue with needed screens later */}
      </Stack.Navigator>
    </>
  )
}
