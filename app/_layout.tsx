import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
// In your app file -- App
import { KkiapayProvider } from '@kkiapay-org/react-native-sdk'
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium'
import { LibreCaslonText_700Bold } from '@expo-google-fonts/libre-caslon-text/700Bold'
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
} from '@expo-google-fonts/montserrat'
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold'

import AuthNavigator from './navigation/AuthNavigator'
import AppNavigator from './navigation/AppNavigator'
import authStorage from './context/auth/Storage'
import navigationTheme from './navigation/navigationTheme'
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
import SearchProvider from './context/SearchContext'
import colors from './config/colors'
import TsActivityIndicator from './components/loader/TsActivityIndicator'
import AuthContext from './context/auth/AuthContext'
import { CartProvider } from './context/CartContext'
import authApi from '@/app/api/auth'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    LibreCaslonText_700Bold,
    Montserrat_100Thin_Italic,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    MontserratBlack: Montserrat_900Black, // Alias the font name
    PlusJakartaSans_500Medium,
    Poppins_600SemiBold,
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await authStorage.getToken()
      console.log('Retrieved token:', token) // Debugging: Check if the token is retrieved...
      setIsAuthenticated(!!token)
      setIsLoading(false)
    }

    checkAuthStatus()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useEffect(() => {
    restoreUser()
  }, [])

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (!user) return setUser(null)
    try {
      const { data } = await authApi.getMe()
      setUser(data?.data)
    } catch (err) {
      console.log('Failed to fetch user profile', err)
      setUser(null)
    }
  }

  if (isLoading) {
    return <TsActivityIndicator visible={isLoading} /> // Show a loading indicator while checking auth status
  }

  if (!fontsLoaded) {
    return null // Prevent rendering until the font is loaded
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />
      <AuthContext.Provider value={{ user, setUser }}>
        <CartProvider>
          <NavigationIndependentTree>
            <NavigationContainer theme={navigationTheme}>
              {user ? (
                <KkiapayProvider>
                  <SearchProvider>
                    <AppNavigator />
                  </SearchProvider>
                </KkiapayProvider>
              ) : (
                <AuthNavigator />
              )}
            </NavigationContainer>
          </NavigationIndependentTree>
        </CartProvider>
      </AuthContext.Provider>
    </>
  )
}
