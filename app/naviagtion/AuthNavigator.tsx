import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext, useEffect } from 'react'
import routes from './routes'
import Presentation from '../screens/startups/Presentation'
import Login from '../screens/startups/Login'
import Signup from '../screens/startups/Signup'
import GetStarted from '../screens/core/GetStarted'

const Stack = createNativeStackNavigator()
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name={routes.PRESENTATION}
        component={Presentation}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={Login}
      />

      <Stack.Screen
        name={routes.SIGNUP}
        component={Signup}
      />
      {/* TODO App Nav */}
      <Stack.Screen
        name={routes.WELCOME}
        component={GetStarted}
      />
    </Stack.Navigator>
  )
}
