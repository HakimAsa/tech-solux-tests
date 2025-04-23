import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
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

import SearchProvider from './context/SearchContext'
import colors from './config/colors'
import TsActivityIndicator from './components/loader/TsActivityIndicator'
import AuthContext from './context/auth/AuthContext'
import { CartProvider } from './context/CartContext'
import authApi from '@/app/api/auth'
import { WishlistProvider } from './context/WishlistContext'

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

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<object | null | undefined>(undefined)

  useEffect(() => {
    const prepare = async () => {
      try {
        if (!fontsLoaded) return

        const storedUser = await authStorage.getUser()
        if (!storedUser) {
          setUser(null)
          setIsLoading(false)
          SplashScreen.hideAsync()
          return
        }

        const { data } = await authApi.getMe()
        console.log('User data fetched:', data) // Debugging
        if (data?.data) {
          setUser(data.data)
        } else {
          console.error('Invalid API response:', data) // Debugging
          setUser(null)
        }
      } catch (err) {
        console.log('Failed to fetch user profile', err)
        setUser(null)
      } finally {
        setIsLoading(false)
        SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [fontsLoaded])

  if (user === undefined || !fontsLoaded) {
    return <TsActivityIndicator visible={true} />
  }

  if (isLoading) {
    return null //<TsActivityIndicator visible={isLoading} /> // Show a loading indicator while fetching user and loading
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.background}
      />
      <AuthContext.Provider value={{ user, setUser }}>
        <WishlistProvider>
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
        </WishlistProvider>
      </AuthContext.Provider>
    </>
  )
}
