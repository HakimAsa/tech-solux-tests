import {
  Image,
  ImageProps,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '@/app/config/styles'
import TsText from '../texts/TsText'

type IconType = keyof typeof MaterialCommunityIcons.glyphMap

export interface TsTextInputProps extends TextInputProps {
  icon?: IconType
  iconColor?: string
  label?: string
  width?: string
  style?: any
  textStyle?: object
  image: ImageProps
  imageStyle?: ImageProps['style']
  wrapper?: ViewProps['style']
}

export default function PaymenttInput({
  wrapper,
  width = '100%',
  secureTextEntry,
  style,
  textStyle,
  imageStyle,
  image,
  ...props
}: TsTextInputProps) {
  return (
    <View style={[styles.container, { width }, style]}>
      <View style={[styles.imageWrapper, wrapper]}>
        <Image
          source={image}
          resizeMode="contain"
          style={[imageStyle]}
        />
      </View>

      <TextInput
        placeholderTextColor="#6E7179"
        keyboardType="number-pad"
        style={[
          defaultStyles.text,
          {
            fontFamily: 'Montserrat_500Medium',
            fontSize: 15,
            lineHeight: 29,
            color: '#6E7179',
            textAlign: 'right', // 👈 Add this line
          },
          styles.input,
          //   style,
        ]}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    paddingHorizontal: 10,
    height: 59,
  },
  imageWrapper: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
  },
})
