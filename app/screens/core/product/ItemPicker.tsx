import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { BasicRowContainer } from '@/app/containers'
import TsText from '@/app/components/texts/TsText'
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native'

export default function ItemPicker({
  label,
  value,
  onPress,
  selectedValue,
  setSelectedValue,
  options = [], // Add options for the picker
  onSelect, // Callback for selecting an item
}: {
  label?: string
  value?: string | number

  onPress?: () => void
  selectedValue?: string | number // Selected value for the picker
  setSelectedValue?: (value: string | number) => void // Function to update the selected value
  options?: Array<string | number> // Array of options for the picker
  onSelect?: (item: string | number) => void // Callback when an item is selected
}) {
  // const [] = useState(value) // State to store the selected value
  const [isModalVisible, setIsModalVisible] = useState(false) // State to control modal visibility

  const handlePress = () => {
    setIsModalVisible(true) // Show the modal
  }

  const handleSelect = (item: string | number) => {
    setSelectedValue?.(item) // Update the selected value
    setIsModalVisible(false) // Hide the modal
    onSelect?.(item) // Call the onSelect callback
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Feather
          name="chevron-down"
          size={20}
          style={{ position: 'absolute', right: 3, top: -5 }}
          color="#1C1B1F"
        />
      </Pressable>
      {/* <Text>Icon</Text> */}
      <BasicRowContainer
        gap={15}
        style={{ flex: 1, paddingHorizontal: 5, alignItems: 'center' }}
      >
        <TsText
          medium
          style={styles.label}
        >
          {label || 'Size'}
        </TsText>
        <TsText
          medium
          style={styles.value}
        >
          {selectedValue || 42}
        </TsText>
      </BasicRowContainer>
      {/* Modal for Item Picker */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <TsText style={styles.optionText}>{item}</TsText>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <TsText style={styles.closeButtonText}>Close</TsText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    height: 25,
    width: 86,
  },
  label: {
    fontFamily: 'Montserrat_400Regular',
  },
  value: {
    letterSpacing: -1.2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 5,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 16,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#FA7189',
    borderRadius: 4,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
