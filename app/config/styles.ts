import { Platform } from 'react-native'

import colors from './colors'

export default {
  colors,
  text: {
    color: colors.textColor,
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
  },
  focusedInput: {
    backgroundColor: '#e0f7fa', //todo
    borderColor: '#00796b', //todo
    borderBottomWidth: 2,
  },
}
