import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker' // For react-native-image-picker
// If using Expo, replace with: import * as ImagePicker from 'expo-image-picker';

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
import useAuth from '@/app/context/auth/useAuth'
import useApi from '@/app/hooks/useApi'
import authApi from '@/app/api/auth'
import TsActivityIndicator from '@/app/components/loader/TsActivityIndicator'
import { Alert } from 'react-native'

export default function Profile({ navigation }: TsProps) {
  const { user } = useAuth()
  const {
    data: userData,
    error,
    loading,
    message,
    request: getMe,
  } = useApi(authApi.getMe)

  const [avatar, setAvatar] = useState(user?.avatar || userData?.avatar || null) // State for avatar

  const handleEditImage = () => {
    Alert.alert(
      'Edit Profile Picture',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: openCamera,
        },
        {
          text: 'Choose from Gallery',
          onPress: openGallery,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    )
  }

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (result.canceled) {
      alert('You cancelled image picker')
    } else if (result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri) // Update avatar with the selected image
    }
  }

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (result.canceled) {
      alert('User cancelled image picker')
    } else if (result.assets && result.assets.length > 0) {
      console.log(result.assets[0])
      setAvatar(result.assets[0].uri) // Update avatar with the selected image
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])
  const requestPermission = async () => {
    const { status, granted } =
      await ImagePicker.getMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        return alert(`L'autorisation d'accéder à la pellicule a été refusée`) //'Permission to access camera roll was denied'
      }
    }
  }

  interface UserDetails {
    avatar?: string
    email?: string
    username?: string
    [key: string]: any
  }

  const updateProfile = async (values: Record<string, any>) => {
    // Update user profile with values.avatar
    console.log('updateProfile', values)
  }
  const newInitialValues = {
    ...profileUpdateInitials,
    email: user?.email,
    username: user?.username,
  }
  useEffect(() => {
    const getUser = async () => {
      await getMe()
    }

    getUser()
  }, [])

  if (loading) return <TsActivityIndicator visible={loading} />
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
            initialValues={newInitialValues}
            validationSchema={profileUpdateValidationSchema}
            onSubmit={updateProfile}
          >
            {/* avatar */}
            <View style={styles.avatar}>
              {/* Add your avatar here */}
              <Image
                source={
                  avatar
                    ? { uri: avatar }
                    : require('@/assets/images/avatar.png')
                }
                style={styles.image}
              />
              <Pressable
                style={styles.pencilView}
                onPress={() => handleEditImage}
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
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.username}
              name="username"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />

            <TsFormField
              label={en.password}
              name="password"
              placeholder="**************"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
              secureTextEntry
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
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.address}
              name="address"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.city}
              name="city"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            {/* it is a picker here */}
            <TsFormField
              label={en.state}
              name="state"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.country}
              name="country"
              inputStyle={styles.inputStyle}
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
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.bankAccountHolderName}
              name="bankaccountholdername"
              inputStyle={styles.inputStyle}
              textStyle={styles.textStyle}
            />
            <TsFormField
              label={en.ifscCode}
              name="ifsccode"
              inputStyle={styles.inputStyle}
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
