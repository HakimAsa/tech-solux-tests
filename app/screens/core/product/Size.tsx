import { StyleSheet, Text, View } from 'react-native'
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
          <TsText
            medium
            key={index}
            style={[
              styles.size,
              {
                backgroundColor: size === item ? '#FA7189' : '#fff',
                color: size === item ? '#fff' : '#FA7189',
              },
            ]}
            onPress={() => {
              setSize(item)
            }}
          >
            {item} UK
          </TsText>
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
    // justifyContent: 'space-between',

    alignItems: 'center',
    gap: 8,
  },
  size: {
    // width: 50,
    height: 32,
    borderRadius: 4,
    fontFamily: 'Montserrat_600SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
    lineHeight: 16,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FA7189',
  },
})
