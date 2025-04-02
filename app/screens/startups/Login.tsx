import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import en from '@/app/config/en'
import AuthFooter from './AuthFooter'
import TsProps from '@/TsProps'
import routes from '@/app/naviagtion/routes'
import TsForm from '@/app/components/forms'
import loginInitials from '@/app/initials/loginInitials'
import SubmitAuthButton from '@/app/components/forms/SubmitAuthButton'
import loginValidationSchema from '@/app/validations/loginValidation'

export default function Login({ navigation }: TsProps) {
  const handleSubmit = (values: object) => {
    console.log('Submitting', values)
    // Navigate to GetStarted screen
    navigation.navigate(routes.WELCOME)
  }
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <KeyboardAvoidViewContainer>
        <AuthHeader title={en.welcomeBack} />
        <TsForm
          initialValues={loginInitials}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          <AuthForm showForgotPassword />
          <SubmitAuthButton title={en.login} />
        </TsForm>
        {/* Add your login form here */}

        <AuthFooter
          linkText={en.signup}
          unlinkText={en.createAnAccount}
          onPress={() => navigation.navigate(routes.SIGNUP)}
        />
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
