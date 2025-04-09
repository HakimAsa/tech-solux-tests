import { Dimensions, Platform } from 'react-native'
import Constants from 'expo-constants'

//current os platform
export const onIOS = Platform.OS === 'ios'
export const onWeb = Platform.OS === 'web'
export const onAnd = Platform.OS === 'android'

// email regex
export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

// password regex
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+\-*/_!%*?&(),;\[\]])[A-Za-z\d@$#+\-*/_!%*?&(),;\[\]]{8,}$/

// currencies symbol
export const currencySymbol = '₦'
export const currencySymbolDollar = '$'
export const currencySymbolPound = '£'
export const currencySymbolEuro = '€'
export const currencySymbolYen = '¥'
export const currencySymbolRupee = '₹'

// screen and window dimensions
export const ScreenWidth = Dimensions.get('screen').width
export const ScreenHeight = Dimensions.get('screen').height
export const WindowHeight = Dimensions.get('window').height
export const WindowWidth = Dimensions.get('window').width

// convert px into percentage relative
export const getPercentage = (px: number) =>
  WindowHeight * ((px - 25) / ScreenHeight)

// export default StatusBarHeight
export const StatusBarHeight = Constants.statusBarHeight

//export endpoints
const ep = {
  AUTH: 'auth',
  LOGIN: 'login',
  OTP: 'otp',
  PRODUCTS: 'products',
  REGISTER: 'register',
  REQUESTFORGOTPASSWORDOTP: 'request-forgotpassword-otp',
  RESEND: 'resend',
  RESETPASSWORDOTP: 'resetpassword-otp',
  VERIFY: 'verify',
}

export default ep
