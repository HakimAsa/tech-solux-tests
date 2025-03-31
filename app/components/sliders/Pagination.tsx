import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { ScreenWidth } from '@/app/config/constants'
import Colors from '@/app/config/colors'

interface PaginationProps {
  data: any[]
  scrollX: Animated.Value
  index: number // Ajoute bien cette ligne
  flatListRef: React.RefObject<any>
  onGetStarted: () => void // 🔥 Ajoute cette prop pour gérer la navigation
}
export default function Pagination({
  data,
  scrollX,
  index,
  flatListRef,
  onGetStarted,
}: PaginationProps) {
  const position = Animated.divide(scrollX, ScreenWidth)

  const handlePrev = () => {
    if (index > 0)
      flatListRef.current?.scrollToIndex({
        // offset: (Math.round(scrollX._value / ScreenWidth) - 1) * ScreenWidth,
        index: index - 1, // ✅ Pas besoin de `_value`
        animated: true,
      })
  }

  const handleNext = () => {
    if (index < data.length - 1)
      flatListRef.current?.scrollToIndex({
        // offset: (Math.round(scrollX._value / ScreenWidth) + 1) * ScreenWidth,
        index: index + 1, // ✅ Plus propre
        animated: true,
      })
  }

  return (
    <View style={styles.container}>
      {/* Bouton Prev */}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: position.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <TouchableOpacity
          onPress={handlePrev}
          disabled={index === 0}
        >
          <Text style={[styles.buttonText, { color: '#C4C4C4' }]}>Prev</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {data.map((_, idx) => {
          const width = position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [10, 40, 10], // Actif : 40px, Inactif : 10px
            extrapolate: 'clamp',
          })

          const height = position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [10, 8, 10], // Actif : 8px, Inactif : 10px
            extrapolate: 'clamp',
          })

          const borderRadius = position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [5, 100, 5], // Actif : 100px, Inactif : 5px
            extrapolate: 'clamp',
          })

          const backgroundColor = position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [Colors.white, '#17223B', Colors.white],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={idx.toString()}
              style={[
                styles.dot,
                { width, height, borderRadius, backgroundColor },
              ]}
            />
          )
        })}
      </View>

      {/* Bouton Next */}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: position.interpolate({
              inputRange: [data.length - 2, data.length - 1],
              outputRange: [1, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        {/* Next or Get Started Button */}
        {index < data.length - 1 ? (
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.primary,
  },

  container: {
    // alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: 345,
    height: 27,
    justifyContent: 'space-between',
    alignSelf: 'center',
    // alignItems: 'center',
    // width: '100%',
    // marginBottom: 10,
    // alignSelf: 'center',
    // alignItems: 'center',
    // width: '100%',
    // marginBottom: 10,
  },
  dot: {
    backgroundColor: Colors.white,
    borderRadius: 9,
    height: 10,
    marginHorizontal: 3,
    width: 10,
    bottom: -10,
  },
  dotsContainer: {
    flexDirection: 'row',
  },
})
