import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import routes from './routes'
import Home from '../screens/core/Home'
import Whishlist from '../screens/core/Whishlist'
import ShoppingCart from '../screens/core/ShoppingCart'
import Search from '../screens/core/Search'
import Profile from '../screens/core/Profile'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* Add your screens here */}
      <Tab.Screen
        name={routes.HOME}
        component={Home}
      />
      <Tab.Screen
        name={routes.WHISHLIST}
        component={Whishlist}
      />
      <Tab.Screen
        name={routes.SHOPPING_CART}
        component={ShoppingCart}
      />
      <Tab.Screen
        name={routes.SEARCH}
        component={Search}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  )
}
