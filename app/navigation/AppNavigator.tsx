import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from '../screens/core/GetStarted'
import TabNavigator from './TabNavigator'
import routes from './routes'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
    //   screenOptions={() => ({
    //     headerShown: false,
    //   })}
    >
      <Stack.Screen
        name={routes.WELCOME}
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
