import authApi from '@/app/api/auth'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import AuthButton from './AuthButton'
import en from '@/app/config/en'
import AuthFooter from './AuthFooter'
import { View } from 'react-native'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'
import TsForm from '@/app/components/forms'
import signupInitials from '@/app/initials/signupInitials'
import TsProps from '@/TsProps'
import { doSetUserCredentials } from '@/app/utils/helpers'
import signupValidationSchema from '@/app/validations/signupValidation'
import ErrorMessages from '@/app/components/forms/ErrorMessages'
import useApi from '@/app/hooks/useApi'
import TsActivityIndicator from '@/app/components/loader/TsActivityIndicator'
import SubmitAuthButton from '@/app/components/forms/SubmitAuthButton'
import routes from '@/app/navigation/routes'

export default function Signup({ navigation }: TsProps) {
  const {
    error,
    loading,
    message,
    request: registerUser,
  } = useApi(authApi.register)

  const handleSubmit = async (values: Record<any, any>) => {
    // transform values
    const data = doSetUserCredentials(values)
    console.log('Submitting', data)
    // call the server
    const res = await registerUser(data as any)
    if (!res?.ok) return
    navigation.navigate(routes.LOGIN)
  }
  if (loading) return <TsActivityIndicator visible={loading} />
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <ScrollableMainContainer>
        <AuthHeader title={en.createAnAccountLineBreak} />
        <TsForm
          initialValues={signupInitials}
          onSubmit={handleSubmit}
          validationSchema={signupValidationSchema}
        >
          <ErrorMessages
            error={message || 'Something went wrong!'}
            visible={error}
          />
          {/* Add your login form here */}
          <AuthForm signUp />

          <View
            style={{
              position: 'absolute',
              top: 428 + 5, // Adjust based on input field
              left: 30,
              width: 258,
              height: 30,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <TsText
              small
              style={{
                fontFamily: 'Montserrat_400Regular',
                color: colors.textColor,
              }}
              /* By clicking the Register button, you agree to the public offer */
            >
              {en.byClickingThe}{' '}
            </TsText>

            <TsText
              small
              style={{ color: '#FF4B26', fontFamily: 'Montserrat_400Regular' }}
              /* By clicking the Register button, you agree to the public offer */
            >
              {en.register}{' '}
            </TsText>

            <TsText
              small
              style={{
                color: colors.textColor,
                fontFamily: 'Montserrat_400Regular',
              }}
              /* By clicking the Register button, you agree to the public offer */
            >
              {en.buttonYouAgree}
            </TsText>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 428 + 20, // Adjust based on input field
              bottom: 30,
              left: 30,
              width: 258,
              height: 30,
            }}
          >
            <TsText
              small
              style={{
                fontFamily: 'Montserrat_400Regular',
                color: colors.textColor,
              }}
              /* By clicking the Register button, you agree to the public offer */
            >
              {en.toThePublicOffer}
            </TsText>
          </View>

          <SubmitAuthButton
            top={496}
            title={en.createAccount}
          />
        </TsForm>
        <AuthFooter
          top={633}
          width={231}
          height={21}
          linkText={en.login}
          unlinkText={en.iAlreadyHaveAnAccount}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </ScrollableMainContainer>
    </MainContainer>
  )
}
