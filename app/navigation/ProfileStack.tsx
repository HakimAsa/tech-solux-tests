import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'

const Stack = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Profile"
        component={Profile}
        options={{ headerShown: false }} // 👈 Hide header only for Profile
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }} // 👈 Show header with back arrow
      />
    </Stack.Navigator>
  )
}
