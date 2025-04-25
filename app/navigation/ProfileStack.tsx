import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'
import ChangePassword from '../screens/core/ChangePassword'
import { StatusBar } from 'expo-status-bar'
import colors from '../config/colors'

const Stack = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.white}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          // DON'T USE Profile here to avoid TabNavigator > HomeTab > Profile, TabNavigator > HomeTab > Profile > Profile warning
          name="Profile Tab"
          component={Profile}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          name={routes.CHANGEPASSWORD}
          component={ChangePassword}
        />
      </Stack.Navigator>
    </>
  )
}
