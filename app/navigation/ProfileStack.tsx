import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Profile from '../screens/core/Profile'
import Settings from '../screens/core/Settings'
import ChangePassword from '../screens/core/ChangePassword'

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
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={({ route }) => {
          console.log(route)
          return {
            title: route.name,
            headerBackTitle: 'Back', // �� Change back button title to 'Back'
          }
        }}
        // options={{ title: 'Change Password' }} // �� Show header with back arrow and title 'Change Password'
      />
    </Stack.Navigator>
  )
}
