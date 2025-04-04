import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import routes from './routes'
import Home from '../screens/core/Home'
import Whishlist from '../screens/core/Whishlist'
import ShoppingCart from '../screens/core/ShoppingCart'
import Search from '../screens/core/Search'
import Profile from '../screens/core/Profile'
import colors from '../config/colors'
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import ProfileStack from './ProfileStack'
import { Pressable, View } from 'react-native'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.tabIconColor,
        tabBarStyle: { height: 84 },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto',
          fontWeight: route.name === routes.HOME ? 500 : 400,
        },
        tabBarInactiveTintColor: colors.black,
      })}
    >
      {/* Add your screens here */}
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.WHISHLIST}
        component={Whishlist}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="heart"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.SHOPPING_CART}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: focused ? '#EB3030' : '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                elevation: focused ? 0 : 1,
              }}
            >
              <Feather
                name="shopping-cart"
                size={size}
                color={focused ? colors.white : color}
              />
            </View>
          ),
          tabBarLabelStyle: {
            display: 'none',

            // justifyContent: 'center',
            // alignItems: 'center',
            // position: 'absolute',
            // left: 20,
            // bottom: 20,
          },
        }}
        component={ShoppingCart}
      />
      <Tab.Screen
        name={routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileStack}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Feather
                name="chevron-left"
                size={30}
                color="black"
              />
            </Pressable>
          ),

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="settings"
              size={size}
              color={color}
            />
          ),
        })}
      />
    </Tab.Navigator>
  )
}
