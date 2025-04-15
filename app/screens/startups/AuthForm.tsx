import TsFormField from '@/app/components/forms/TsFormField'
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
      <TsFormField
        icon="account"
        name="useridentifier"
        placeholder={en.userNameOrEmail}
      />
      <TsFormField
        name="password"
        placeholder={en.password}
        icon="lock"
      />
      {signUp && (
        <TsFormField
          name="confirmpassword"
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
    // left: 32,
    top: 182,
    // width: 317,
    width: '100%',
  },
  forgotPassword: {
    left: 242 - 64,
    height: 15,
    bottom: 10,
    width: 108,
  },
  forgotText: {
    color: colors.primary,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'right',
    lineHeight: 12,
  },
})
