import { TouchableOpacity, View } from 'react-native'
import React from 'react'

import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import AuthButton from './AuthButton'
import en from '@/app/config/en'

export default function Login() {
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <KeyboardAvoidViewContainer>
        <AuthHeader title={en.welcomeBack} />
        {/* Add your login form here */}
        <AuthForm showForgotPassword />

        <AuthButton
          title={en.login}
          onPress={() => console.log('login')}
        />
        <View
          style={{
            flexDirection: 'row',
            top: 567,
            height: 17,
            width: 132,
            alignSelf: 'center',
          }}
        >
          <TsText
            medium
            style={{
              fontFamily: ' Montserrat_400Regular',
              color: '#575757',
            }}
          >
            {en.createAnAccount}{' '}
          </TsText>
          <TouchableOpacity onPress={() => console.log('register')}>
            <TsText
              medium
              style={{
                fontFamily: 'Montserrat_600SemiBold',
                color: colors.primary,
                textDecorationLine: 'underline',
              }}
            >
              {en.signup}
            </TsText>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
