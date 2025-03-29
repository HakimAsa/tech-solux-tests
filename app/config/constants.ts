import { Dimensions, Platform } from 'react-native'
import Constants from 'expo-constants'

//current os platform
export const onIOS = Platform.OS === 'ios'
export const onWeb = Platform.OS === 'web'
export const onAnd = Platform.OS === 'android'

// screen and window dimensions
export const ScreenWidth = Dimensions.get('screen').width
export const ScreenHeight = Dimensions.get('screen').height
export const WindowHeight = Dimensions.get('window').height
export const WindowWidth = Dimensions.get('window').width

// export default StatusBarHeight
export const StatusBarHeight = Constants.statusBarHeight

//export endpoints
const ep = {
  AUTH: 'auth',
  LOGIN: 'login',
  PRODUCTS: 'products',
  REGISTER: 'register',
}

export default ep
