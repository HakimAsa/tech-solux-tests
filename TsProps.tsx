import { NavigationProp } from '@react-navigation/native'

export default interface TsProps {
  navigation: NavigationProp<any, any>
  route?: any
  children?: React.ReactNode
}
