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
          name="My Home"
          component={Home}
        />
        <Stack.Screen
          name="My Search"
          component={Search}
        />
        {/* continue with needed screens later */}
      </Stack.Navigator>
    </>
  )
}
