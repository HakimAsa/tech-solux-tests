import { StyleSheet, Text, View } from 'react-native'
import { ReactNode } from 'react'
import styles from '@/app/config/styles'

interface TsTextProps {
  big?: boolean
  medium?: boolean
  small?: boolean
  style?: object
  children: ReactNode | string
}

export default function TsText({
  big,
  children,
  medium,
  small,
  style,
}: TsTextProps) {
  return (
    <Text
      style={[
        styles.text,
        { fontSize: small ? 12 : big ? 22 : medium ? 14 : 16 },
        style,
      ]}
    >
      {children}
    </Text>
  )
}
