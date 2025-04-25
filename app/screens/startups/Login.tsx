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
import { StatusBarHeight } from '@/app/config/constants'

export default function Login({ navigation }: TsProps) {
  const { login } = useAuth()

  const { error, loading, message, request: loginUser } = useApi(authApi.login)

  const handleSubmit = async (values: Record<string, string>) => {
    // Make the API request
    const data = doSetUserCredentials(values)

    const res = await loginUser(data as any)
    if (!res?.ok) return
    login(res.data as any)
  }
  if (loading) return <TsActivityIndicator visible={loading} />
  return (
    <MainContainer
      style={{
        paddingLeft: 32,
        paddingTop: message ? StatusBarHeight + 35 : 10,
        paddingRight: 32,
      }}
    >
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
