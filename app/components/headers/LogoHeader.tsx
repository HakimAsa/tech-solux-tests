import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'
import React, { useState } from 'react'

import authApi from '@/app/api/auth'
import TsText from '../texts/TsText'
import en from '@/app/config/en'
import colors from '@/app/config/colors'
import { BasicRowContainer } from '@/app/containers'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import useAuth from '@/app/context/auth/useAuth'
import useApi from '@/app/hooks/useApi'
import TsActivityIndicator from '../loader/TsActivityIndicator'
import ErrorMessages from '../forms/ErrorMessages'

interface LogoHeaderProps {
  onAvatarPress?: () => void
  onLogoPress?: () => void
  onMenuPress?: () => void
  style?: ViewProps['style']
}

export default function LogoHeader({
  onAvatarPress,
  onLogoPress,
  onMenuPress,
  style,
}: LogoHeaderProps) {
  const { logout } = useAuth()
  const { user } = useAuth()
  const {
    error,
    loading,
    message,
    request: logoutUser,
  } = useApi(authApi.logout)
  const [isMenuVisible, setIsMenuVisible] = useState(false) // State to control modal visibility

  const handleMenuPress = () => {
    setIsMenuVisible(true) // Show the modal
  }

  const closeMenu = () => {
    setIsMenuVisible(false) // Hide the modal
  }
  const handleLogout = async () => {
    const res = await logoutUser()
    if (!res?.ok) return
    logout()
  }
  if (loading)
    return (
      <TsActivityIndicator
        visible={loading}
        text="Logging you out"
      />
    )
  return (
    <>
      <ErrorMessages
        error={message || 'Could not log you out from the server'}
        visible={error}
      />
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={handleMenuPress} // Open the modal
        >
          <Image
            style={styles.menuImage}
            alt="humberger"
            source={require('@/assets/images/menu.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={onLogoPress}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            alt="logo"
            source={require('@/assets/images/logo.png')}
          />
          <TsText style={styles.stylish}>{en.stylish}</TsText>
        </TouchableOpacity>
        <TouchableOpacity onPress={onAvatarPress}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 24,
            }}
            alt="avatar"
            source={
              user?.avatar
                ? { uri: user.avatar }
                : require('@/assets/images/avatar.png')
            }
          />
        </TouchableOpacity>
      </View>
      {/* Modal for Left Panel */}
      <Modal
        visible={isMenuVisible}
        animationType="slide"
        transparent
        onRequestClose={closeMenu} // Close the modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.menuPanel}>
            <TouchableOpacity
              onPress={closeMenu}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <View style={styles.menuItems}>
              <TsText style={styles.menuItem}>Home</TsText>
              <TsText style={styles.menuItem}>Profile</TsText>
              <TsText style={styles.menuItem}>Settings</TsText>
            </View>
            <View style={styles.logoutContainer}>
              <Pressable onPress={handleLogout}>
                <BasicRowContainer gap={5}>
                  <MaterialIcons
                    style={{ alignSelf: 'center' }}
                    name="exit-to-app"
                    color={colors.white}
                    size={28}
                  />
                  <TsText style={styles.menuItem}>Logout</TsText>
                </BasicRowContainer>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  logo: {
    // width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 111.78,
    height: 31.03,
  },
  menuContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuImage: {
    width: 24,
    height: 24,
  },
  stylish: {
    fontSize: 18,
    color: '#4392F9',
    marginLeft: -8,
    lineHeight: 22,
    // textTransform: 'uppercase',
    // letterSpacing: 0.5,
    fontFamily: 'LibreCaslonText_700Bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-start',
  },
  menuPanel: {
    width: '70%', // Adjust width for the left panel
    height: '100%',
    backgroundColor: '#4392F9',
    padding: 16,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  logoutContainer: {
    justifyContent: 'center',
    marginBottom: 20, // Add some spacing at the bottom
  },
  menuItems: {
    marginTop: 20,
    flex: 1,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.white,
  },
})
