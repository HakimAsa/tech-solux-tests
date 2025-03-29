import { View } from 'react-native'
import React from 'react'

import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import TsTextInput from '@/app/components/inputs/TsTextInput'
import colors from '@/app/config/colors'
import TsButton from '@/app/components/buttons/TsButton'
import { StatusBarHeight } from '@/app/config/constants'

export default function Login() {
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <KeyboardAvoidViewContainer>
        <TsText
          style={{
            fontFamily: 'Montserrat_700Bold',
            lineHeight: 43,
            position: 'absolute',
            top: 63,
            left: 32,
          }} // Match Figma spacing
          fontSize={36}
        >
          Welcome{'\n'} Back!
        </TsText>
        {/* Add your login form here */}
        <TsTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username or Email"
          style={{ left: 32, position: 'absolute', top: 182, width: 317 }} // Exact position from the top of the screen
          icon="account"
        />
        <TsTextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            position: 'absolute',
            top: 268,
            left: 32,
            width: 317,
          }}
          icon="lock"
        />

        <View style={{ marginTop: 5 }}>
          <TsText
            onPress={() => console.log('forgot password')}
            small
            style={{
              color: colors.primary,
              fontFamily: 'Montserrat_400Regular',
              top: 332,
              left: 242,
              width: 108,
            }}
          >
            Forgot Password?
          </TsText>
        </View>

        <TsButton
          button={{
            position: 'absolute',
            top: 399,
            left: 29,
            bottom: 21,
            width: 317,
          }}
          onPress={() => console.log('login')}
        >
          Login
        </TsButton>
        <TsText
          medium
          style={{
            top: 567,
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
