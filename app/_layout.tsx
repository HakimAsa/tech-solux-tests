import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium'
import { LibreCaslonText_700Bold } from '@expo-google-fonts/libre-caslon-text/700Bold'
import {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat'
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold'

import AuthNavigator from './navigation/AuthNavigator'
import useAuth from './context/auth/useAuth'
import AppNavigator from './navigation/AppNavigator'
import authStorage from './context/auth/Storage'
import navigationTheme from './navigation/navigationTheme'
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
import SearchProvider from './context/SearchContext'
import colors from './config/colors'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const { user } = useAuth()
  const [fontsLoaded] = useFonts({
    LibreCaslonText_700Bold,
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

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await authStorage.getToken()
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

  if (!fontsLoaded) {
    return null // Prevent rendering until the font is loaded
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />
      <NavigationIndependentTree>
        <NavigationContainer theme={navigationTheme}>
          {isAuthenticated ? (
            <SearchProvider>
              <AppNavigator />
            </SearchProvider>
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </NavigationIndependentTree>
    </>
  )
}
