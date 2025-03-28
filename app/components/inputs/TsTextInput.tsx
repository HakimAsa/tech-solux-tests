import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '@/app/config/styles'
import TsText from '../texts/TsText'

type IconType = keyof typeof MaterialCommunityIcons.glyphMap

interface TsTextInputProps {
  icon?: IconType
  iconColor?: string
  label?: string
  width?: string
  isPasswordVisible?: boolean
  setPasswordVisible?: (visible: boolean) => void
  isPasswordField?: boolean
  secureTextEntry?: boolean
  style?: object
  textStyle?: object
  otherProps?: any
}

export default function TsTextInput({
  icon,
  iconColor = defaultStyles.colors.medium,
  label,
  width = '100%',
  isPasswordVisible,
  setPasswordVisible,
  isPasswordField,
  secureTextEntry,
  style,
  textStyle,
  ...props
}: TsTextInputProps) {
  return (
    <View style={{ marginBottom: 5 }}>
      {label ? (
        <TsText
          fontSize={10}
          style={[textStyle, { marginLeft: 0, fontWeight: 700 }]}
          {...props}
        >
          {label}
        </TsText>
      ) : null}
      <View style={[styles.container, { width }, style]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={iconColor}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text, { alignSelf: 'center' }, styles.input]}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {isPasswordField && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              setPasswordVisible && setPasswordVisible(!isPasswordVisible)
            }
          >
            <MaterialCommunityIcons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={iconColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8A8A9',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 55,
    fontSize: 12,
    fontWeight: 500,
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
})
