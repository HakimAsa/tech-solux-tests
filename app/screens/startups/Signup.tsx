import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import AuthHeader from '@/app/screens/startups/AuthHeader'
import AuthForm from './AuthForm'
import AuthButton from './AuthButton'
import en from '@/app/config/en'
import AuthFooter from './AuthFooter'
import { TouchableOpacity, View } from 'react-native'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'

export default function Signup() {
  return (
    <MainContainer style={{ paddingLeft: 0 }}>
      <ScrollableMainContainer>
        <AuthHeader title={en.createAnAccountLineBreak} />
        {/* Add your login form here */}
        <AuthForm signUp />

        <View
          style={{
            position: 'absolute',
            top: 428 + 15, // Adjust based on input field
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
          <TouchableOpacity
            onPress={() => console.log('go to register screen')}
          >
            <TsText
              small
              style={{ color: '#FF4B26', fontFamily: 'Montserrat_400Regular' }}
              /* By clicking the Register button, you agree to the public offer */
            >
              {en.register}{' '}
            </TsText>
          </TouchableOpacity>

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
            top: 428 + 30, // Adjust based on input field
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

        <AuthButton
          top={496}
          title={en.createAccount}
          onPress={() => console.log('login')}
        />
        <AuthFooter
          top={633}
          width={231}
          height={21}
          linkText={en.login}
          unlinkText={en.iAlreadyHaveAnAccount}
          onPress={() => console.log('login')}
        />
      </ScrollableMainContainer>
    </MainContainer>
  )
}
