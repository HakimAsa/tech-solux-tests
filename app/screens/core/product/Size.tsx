import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import TsText from '@/app/components/texts/TsText'

const sizeList = [6, 7, 8, 9, 10]

export default function Size({ productSize }: { productSize: number }) {
  const [active, setActive] = useState(false)
  const [size, setSize] = useState(productSize || 0)
  return (
    <View style={styles.container}>
      <TsText
        medium
        style={styles.title}
      >
        Size: {size}UK
      </TsText>
      <View style={styles.sizeContainer}>
        {sizeList.map((item, index) => (
          <Pressable
            onPress={() => {
              setSize(item)
            }}
            key={index}
            style={[
              styles.sizeWrapper,
              {
                backgroundColor: size === item ? '#FA7189' : '#fff',
              },
            ]}
          >
            <TsText
              medium
              style={[
                styles.size,
                { color: size === item ? '#fff' : '#FA7189' },
              ]}
            >
              {item} UK
            </TsText>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    lineHeight: 16,
    marginBottom: 15,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  size: {
    // width: 50,

    fontFamily: 'Montserrat_600SemiBold',
    alignSelf: 'center',
    lineHeight: 16,
  },
  sizeWrapper: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FA7189',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
