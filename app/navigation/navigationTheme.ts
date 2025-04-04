import { DefaultTheme } from '@react-navigation/native'
import colors from '../config/colors'

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
    // text: "#212121",
    // border: "#BDBDBD",
    // accent: "#FFC107",
  },
}
