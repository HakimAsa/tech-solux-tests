import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'
import ChangePassword from '../screens/core/ChangePassword'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'
import Home from '../screens/core/home/Home'
import Search from '../screens/core/Search'

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
          name="My Search"
          component={Search}
        />
        <Stack.Screen
          name="HomeFromProfile"
          component={Profile}
        />
        {/* continue with needed screens later */}
      </Stack.Navigator>
    </>
  )
}
