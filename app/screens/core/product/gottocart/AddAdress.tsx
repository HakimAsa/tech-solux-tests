import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import colors from '@/app/config/colors'
import DecisionBtn from '@/app/components/buttons/DecisionBtn'
import TsTextInput from '@/app/components/inputs/TsTextInput'
import TsText from '@/app/components/texts/TsText'

export default function AddAdress() {
  const [isVisible, setIsVisible] = useState(false)
  const [newAddress, setNewAddress] = useState('')
  const [newContact, setNewContact] = useState('')

  const handleSave = () => {
    setIsVisible(false)
    // Save the new address and contact here (e.g., send to server or update state)
    console.log('New Address:', newAddress)
    console.log('New Contact:', newContact)
  }
  return (
    <>
      <TouchableOpacity
        // onPress={onPress}
        onPress={() => setIsVisible(true)} // Show the modal
        style={styles.addIconWrapper}
      >
        <Image
          source={require('@/assets/images/pluscircleicon.png')}
          style={styles.addIcon}
        />
      </TouchableOpacity>
      {/* Modal for Adding Address */}
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TsText style={styles.modalTitle}>Add New Address</TsText>
            <TsTextInput
              //   style={styles.input}
              value={newAddress}
              onChangeText={setNewAddress}
              placeholder="Enter address"
            />
            <TsTextInput
              //   style={styles.input}
              value={newContact}
              onChangeText={setNewContact}
              placeholder="Enter contact"
              keyboardType="phone-pad"
            />
            <DecisionBtn
              onCancel={() => setIsVisible(false)}
              onSave={handleSave}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  addIcon: {
    width: 24,
    height: 24,
  },
  addIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    width: 78,
    height: 79,
    borderRadius: 6,
    backgroundColor: colors.white,
    elevation: 1,
    overflow: 'hidden',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 10,
    lineHeight: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
})
