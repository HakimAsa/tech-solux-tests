import { View } from 'react-native'
import React from 'react'

import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import TsTextInput from '@/app/components/inputs/TsTextInput'
import colors from '@/app/config/colors'
import TsButton from '@/app/components/buttons/TsButton'

export default function Login() {
  return (
    <MainContainer>
      <KeyboardAvoidViewContainer>
        <TsText
          style={{ fontFamily: 'Montserrat_700Bold,' }}
          fontSize={36}
        >
          Welcome Back!
        </TsText>
        {/* Add your login form here */}
        <TsTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username or Email"
          icon="account"
        />
        <TsTextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          style={{ marginBottom: 0 }}
          icon="lock"
        />
        <View style={{ marginTop: 5 }}>
          <TsText
            onPress={() => console.log('forgot password')}
            small
            style={{
              color: colors.primary,
              fontWeight: 400,
              textAlign: 'right',
            }}
          >
            Forgot Password?
          </TsText>
        </View>
        <TsButton
          button={{ marginTop: 50 }}
          onPress={() => console.log('login')}
        >
          Login
        </TsButton>
        <TsText
          medium
          style={{
            marginTop: 50,
            textAlign: 'center',
            color: '#575757',
          }}
        >
          Create an account{' '}
          <TsText
            medium
            style={{
              fontWeight: 600,
              color: colors.primary,
              textDecorationLine: 'underline',
            }}
            onPress={() => console.log('register')}
          >
            Sign Up
          </TsText>
        </TsText>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
