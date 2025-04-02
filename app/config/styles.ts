import { Platform } from 'react-native'

import colors from './colors'

export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'Montserrat_500Medium' : 'Courier',
  },
  focusedInput: {
    backgroundColor: '#e0f7fa', //todo
    borderColor: colors.primary, //'#00796b', //todo
    borderWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 2,
    borderBottomWidth: 0,
  },
}
