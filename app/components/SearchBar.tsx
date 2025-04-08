import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'

import colors from '../config/colors'
import defaultStyles from '@/app/config/styles'
import en from '../config/en'
import { useSearchContext } from '../context/SearchContext'

export interface TsTextInputProps extends TextInputProps {
  products: any[]
  width?: string
  style?: any
  goToSearch?: () => void
}

export default function SearchBar({
  products,
  width = '100%',
  style,
  goToSearch,
  ...props
}: TsTextInputProps) {
  const { searchTerm, setSearchTerm, searchProducts } = useSearchContext()

  const handleChange = (text: string) => {
    setSearchTerm(text)
    searchProducts(text, products)

    if (text.trim().length > 0) {
      goToSearch && goToSearch() // 🔥 navigate to dedicated search screen
    }
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <View style={[styles.container, { width }, style]}>
      <MaterialIcons
        name="search"
        size={20}
        color="#BBBBBB"
        style={styles.icon}
      />

      <TextInput
        style={[
          defaultStyles.text,
          {
            alignSelf: 'center',
            fontFamily: 'Montserrat_400Regular',
          },
          styles.input,
          style,
        ]}
        placeholder={en.searchAnyProduct}
        placeholderTextColor="#BBBBBB"
        returnKeyType="search"
        autoFocus={true}
        value={searchTerm}
        onChangeText={handleChange}
        {...props}
      />

      {searchTerm.length > 0 ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleClear}
        >
          <Ionicons
            name="close-circle"
            size={20}
            color={colors.lightgray}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => console.log('Mic clicked')}
        >
          <MaterialCommunityIcons
            name="microphone-outline"
            size={20}
            color="#BBBBBB"
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 15,
    marginTop: 0,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 8,
    fontWeight: 500,
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
})

// export default function SearchBar({
//   searchText,
//   search,
// }: {
//   searchText?: string
//   search?: () => void
// }) {
//   return (
//     <View style={{ backgroundColor: colors.white }}>
//       <TsTextInput
//         rightIcon="microphone-outline"
//         style={styles.input}
//         right
//         icon="map-search"
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   input: {
//     elevation: 1,
//     backgroundColor: colors.white,
//     borderWidth: 0,
//     borderRadius: 4,
//     height: 40,
//   },
// })
