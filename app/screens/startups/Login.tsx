import { TouchableOpacity, View } from 'react-native'
import React from 'react'

import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import AuthButton from './AuthButton'
import en from '@/app/config/en'
import AuthFooter from './AuthFooter'
import TsProps from '@/TsProps'
import routes from '@/app/naviagtion/routes'

export default function Login({ navigation }: TsProps) {
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <KeyboardAvoidViewContainer>
        <AuthHeader title={en.welcomeBack} />
        {/* Add your login form here */}
        <AuthForm showForgotPassword />

        <AuthButton
          title={en.login}
          onPress={() => navigation.navigate(routes.WELCOME)}
        />
        <AuthFooter
          linkText={en.signup}
          unlinkText={en.createAnAccount}
          onPress={() => console.log('sign up')}
        />
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
