import { FormikValues, useFormikContext } from 'formik'
import { useState } from 'react'
import { StyleSheet, TextInputProps } from 'react-native'

import ErrorMessages from './ErrorMessages'
import TsTextInput, { TsTextInputProps } from '../inputs/TsTextInput'
import colors from '@/app/config/colors'
import styles from '@/app/config/styles'

interface TsFormFieldProps extends TsTextInputProps {
  defaultValue?: string
  name: string
  allFieldsFilled?: boolean
  setAllFieldsFilled?: (value: boolean) => void
  // otherProps?: TextInputProps
}

export default function TsFormField({
  defaultValue,
  name,
  label,
  width,
  allFieldsFilled,
  setAllFieldsFilled,
  ...props
}: TsFormFieldProps) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext<FormikValues>()
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  // const [allFieldsFilled, setAllFieldsFilled] = useState(false)
  const isPasswordField =
    name.toLowerCase() === 'password' ||
    name === 'confirmpassword' ||
    name === 'confirmnewpassword' ||
    name === 'newpassword'

  const handleOnChangeText = (text: string) => {
    setFieldValue(name, text)
    // setDirty(!!text)
  }

  const fieldsFilled = Object.values(values).every((value) => {
    if (typeof value === 'string') {
      return value.trim() !== '' // Handle string values
    }

    if (typeof value === 'object' && value !== null) {
      return Object.keys(value).length > 0 // Handle non-empty objects
    }
    if (Array.isArray(value)) {
      return value.length >= 0 // Handle non-empty arrays
    }
    return (
      value !== null ||
      value !== undefined ||
      typeof value === 'boolean' ||
      typeof value === 'number'
    ) // Handle other types (numbers, booleans, etc.)
  })

  return (
    <>
      <TsTextInput
        onBlur={() => {
          setFieldTouched(name)
          setIsFocused(false)
          setAllFieldsFilled &&
            setAllFieldsFilled(!errors[name] && fieldsFilled)
        }}
        onFocus={() => setIsFocused(true)}
        onChangeText={(text) => handleOnChangeText(text)}
        value={values[name]}
        width={width}
        label={label}
        isPasswordField={isPasswordField}
        isPasswordVisible={isPasswordVisible}
        setPasswordVisible={setPasswordVisible}
        iconColor={isFocused ? colors.inputBorderColer : colors.medium}
        style={isFocused && styles.focusedInput}
        secureTextEntry={isPasswordField && !isPasswordVisible}
        {...props}
      />
      <ErrorMessages
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  )
}
