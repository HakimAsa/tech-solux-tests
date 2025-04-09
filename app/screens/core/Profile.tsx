import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import MainContainer, { ScrollableMainContainer } from '@/app/containers'
import colors from '@/app/config/colors'
import TsForm from '@/app/components/forms'
import TsText from '@/app/components/texts/TsText'
import TsFormField from '@/app/components/forms/TsFormField'
import en from '@/app/config/en'
import SubmitButton from '@/app/components/forms/SubmitButton'
import LineSeparator from '@/app/components/LineSeparator'
import profileUpdateValidationSchema from '@/app/validations/profileUpdateValidation'
import profileUpdateInitials from '@/app/initials/profileUpdateInitials'
import TsProps from '@/TsProps'
import BasicHeader from '@/app/components/headers/BasicHeader'
import routes from '@/app/navigation/routes'

export default function Profile({ navigation }: TsProps) {
  const updateProfile = async (values: Record<string, any>) => {
    // Update user profile with values.avatar
    console.log('updateProfile', values)
  }
  return (
    <BaseScreen style={{ backgroundColor: colors.white }}>
      <BasicHeader
        title={routes.PROFILE}
        onPress={() => {
          if (navigation.canGoBack()) navigation.goBack()
          else navigation.navigate(routes.HOME)
        }}
      />
      <MainContainer
        style={{ padding: 24, paddingLeft: 24, backgroundColor: colors.white }}
      >
        <ScrollableMainContainer>
          <TsForm
            initialValues={profileUpdateInitials}
            validationSchema={profileUpdateValidationSchema}
            onSubmit={updateProfile}
          >
            {/* avatar */}
            <View style={styles.avatar}>
              {/* Add your avatar here */}
              <Image
                source={require('@/assets/images/avatar.png')}
                style={styles.image}
              />
              <Pressable
                style={styles.pencilView}
                onPress={() =>
                  console.log('choose from gallery or open camera')
                }
              >
                <Image
                  source={require('@/assets/images/pencil.png')}
                  style={styles.pencil}
                />
              </Pressable>
            </View>
            <TsText style={styles.heading}>{en.personalDetails}</TsText>
            <TsFormField
              label={en.emailAddress}
              name="email"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.username}
              name="username"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />

            <TsFormField
              label={en.password}
              name="password"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <Pressable
              onPress={() => navigation.navigate('Change Password')}
              style={{ marginVertical: 15, marginBottom: 30 }}
            >
              <TsText
                small
                style={styles.changePasswordText}
              >
                {en.changePassword}
              </TsText>
            </Pressable>
            <LineSeparator />
            <TsText
              style={[
                styles.heading,
                { fontSize: 16, lineHeight: 16, marginTop: -15 },
              ]}
            >
              {en.businessAddressDetails}
            </TsText>

            <TsFormField
              label={en.pincode}
              name="pincode"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.address}
              name="address"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.city}
              name="city"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            {/* it is a picker here */}
            <TsFormField
              label={en.state}
              name="state"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.country}
              name="country"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <LineSeparator />
            {/* BANK ACCOUNT DETAILS SECTION */}
            <TsText
              style={[
                styles.heading,
                { fontSize: 16, lineHeight: 16, marginTop: -15 },
              ]}
            >
              {en.bankAccountDetails}
            </TsText>
            <TsFormField
              label={en.bankAccountNumber}
              name="bankaccountnumber"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.bankAccountHolderName}
              name="bankaccountholdername"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.ifscCode}
              name="ifsccode"
              style={styles.inputStyle}
              textStyle={styles.textStyle}
            />

            <SubmitButton
              title={en.save}
              button={{ borderRadius: 8, marginTop: 15 }}
            />
          </TsForm>
        </ScrollableMainContainer>
      </MainContainer>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 103,
    height: 98,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  changePasswordText: {
    color: colors.primary,
    fontFamily: 'PlusJakartaSans_500Medium',
    lineHeight: 12,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  heading: {
    paddingTop: 25,
    fontSize: 18,
    marginVertical: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: colors.black,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 100,
  },
  inputStyle: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: colors.black,
    lineHeight: 14,
    paddingHorizontal: 10,
  },
  pencil: {
    width: 14,
    height: 14.5,
    tintColor: colors.white,
    alignSelf: 'center',
  },
  pencilView: {
    width: 32,
    height: 32,
    backgroundColor: '#4392F9',
    borderColor: colors.white,
    borderRadius: 16,
    borderWidth: 3,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'Montserrat_400Regular',
    color: colors.black,
    fontWeight: 'normal',
  },
})
