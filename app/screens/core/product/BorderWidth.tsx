import { View, ViewProps } from 'react-native'

export default function BorderWidth({
  style,
  borderBottomWidth = 1,
  borderColor = '#c6c6c6',
}: {
  borderBottomWidth?: number
  borderColor?: string
  style?: ViewProps['style']
}) {
  return <View style={[{ borderBottomWidth, borderColor }, style]} />
}
