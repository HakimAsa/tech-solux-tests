import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/app/config/colors'
import TsText from '@/app/components/texts/TsText'
import en from '@/app/config/en'
import TsTextInput from '@/app/components/inputs/TsTextInput'
import TsButton from '@/app/components/buttons/TsButton'
import { RowContainer } from '@/app/containers'
import DecisionBtn from '@/app/components/buttons/DecisionBtn'

export default function Address({
  onPencilClick,
}: {
  onPencilClick: () => void
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [address, setAddress] = useState("216 St Paul's Rd, London N1 2LL, UK")
  const [contact, setContact] = useState('+44-784232')

  const handleSave = async () => {
    setIsModalVisible(false)
    // Save the updated address and contact here (e.g., send to server or update state)
  }
  return (
    <>
      <View style={styles.container}>
        <View>
          <TsText
            small
            style={{ lineHeight: 22 }}
          >
            {en.address} :
          </TsText>
          <TsText
            small
            style={styles.address}
          >
            {address}
          </TsText>
          <TsText
            small
            style={styles.address}
          >
            Contact : {contact}
          </TsText>
        </View>
        <Pressable
          style={styles.pencil}
          onPress={() => setIsModalVisible(true)} // Show the modal
        >
          <Image
            source={require('@/assets/images/pencilpaper.png')}
            style={styles.pencilIcon}
          />
        </Pressable>
      </View>
      {/* Modal for Editing Address */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TsText style={styles.modalTitle}>Edit Address</TsText>
            <TsTextInput
              //   style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter new address"
            />
            <TsTextInput
              //   style={styles.input}
              value={contact}
              onChangeText={setContact}
              placeholder="Enter new contact"
              keyboardType="phone-pad"
            />
            <DecisionBtn
              onCancel={() => setIsModalVisible(false)}
              onSave={handleSave}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  address: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 14,
  },
  container: {
    height: 79,
    // flex: 1,
    // width: 241,
    padding: 10,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: colors.white,
  },
  pencil: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  pencilIcon: {
    width: 12,
    height: 12,
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
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
