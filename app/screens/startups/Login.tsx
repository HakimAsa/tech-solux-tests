import authApi from '@/app/api/auth'
import MainContainer, { KeyboardAvoidViewContainer } from '@/app/containers'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import en from '@/app/config/en'
import AuthFooter from './AuthFooter'
import TsProps from '@/TsProps'
import routes from '@/app/navigation/routes'
import TsForm from '@/app/components/forms'
import loginInitials from '@/app/initials/loginInitials'
import SubmitAuthButton from '@/app/components/forms/SubmitAuthButton'
import loginValidationSchema from '@/app/validations/loginValidation'
import useApi from '@/app/hooks/useApi'
import useAuth from '@/app/context/auth/useAuth'
import ErrorMessages from '@/app/components/forms/ErrorMessages'
import { doSetUserCredentials } from '@/app/utils/helpers'
import TsActivityIndicator from '@/app/components/loader/TsActivityIndicator'
import { CommonActions } from '@react-navigation/native'

export default function Login({ navigation }: TsProps) {
  const { login } = useAuth()

  const { error, loading, message, request: loginUser } = useApi(authApi.login)

  const handleSubmit = async (values: Record<string, string>) => {
    // Make the API request
    const data = doSetUserCredentials(values)
    console.log('Submitting', data)
    const res = await loginUser(data as any)
    if (!res?.ok) return
    const { token } = res.data as any
    login(token as string)
    // Navigate to GetStarted screen TODO should not be able to come back here using back android
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: 'AppNavigator' }], // Now Welcome is properly handled in MainNavigator
    //   })
    // )
  }
  if (loading) return <TsActivityIndicator visible={loading} />
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <KeyboardAvoidViewContainer>
        <AuthHeader title={en.welcomeBack} />
        <TsForm
          initialValues={loginInitials}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          <ErrorMessages
            error={message || 'Something went wrong!'}
            visible={error}
          />
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
