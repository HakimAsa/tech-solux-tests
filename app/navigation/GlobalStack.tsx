import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from '../screens/core/GetStarted'
import TabNavigator from './TabNavigator'
import routes from './routes'
import Profile from '../screens/core/Profile'

const Stack = createNativeStackNavigator()
export default function GlobalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PROFILE}
        component={Profile}
      />
    </Stack.Navigator>
  )
}
