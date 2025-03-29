import TsTextInput from '@/app/components/inputs/TsTextInput'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import en from '@/app/config/en'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

interface AuthFormProps {
  showForgotPassword?: boolean
  signUp?: boolean
}

export default function AuthForm({
  showForgotPassword = false,
  signUp = false,
}: AuthFormProps) {
  return (
    <View style={styles.container}>
      <TsTextInput
        icon="account"
        placeholder={en.userNameOrEmail}
      />
      <TsTextInput
        placeholder={en.password}
        icon="lock"
      />
      {signUp && (
        <TsTextInput
          placeholder={en.confirmPassword}
          icon="lock"
        />
      )}

      {showForgotPassword && (
        <TouchableOpacity
          onPress={() => console.log('forgot password')}
          style={styles.forgotPassword}
        >
          <TsText
            small
            style={styles.forgotText}
          >
            {en.forgotPassword}
          </TsText>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 32,
    top: 182,
    width: 317,
  },
  forgotPassword: {
    position: 'absolute',
    top: 332 - 182 + 15, // Adjust based on input field
    left: 242 - 32,
    width: 108,
  },
  forgotText: {
    color: colors.primary,
    fontFamily: 'Montserrat_400Regular',
  },
})
