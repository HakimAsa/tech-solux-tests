import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BasicRowContainer } from '../containers'

const Pipe = () => {
  return (
    <BasicRowContainer>
      <LinearGradient
        colors={['#EFAD18', '#F8D7B4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.pipe}
      />
      {/* Scatter Dots */}
      <View style={styles.scatterContainer}>
        <View style={styles.dot1} />
        <View style={styles.dot2} />
        <View style={styles.dot3} />
        <View style={styles.dot4} />
      </View>
    </BasicRowContainer>
  )
}

const styles = StyleSheet.create({
  scatterContainer: {
    position: 'relative',
    marginLeft: 4,
    height: 171,
    justifyContent: 'center',
  },
  dot1: {
    width: 4,
    height: 4,
    backgroundColor: '#F8D7B4',
    borderRadius: 2,
    position: 'absolute',
    top: 20,
    left: 0,
  },
  dot2: {
    width: 3,
    height: 3,
    backgroundColor: '#EFAD18',
    borderRadius: 1.5,
    position: 'absolute',
    top: 50,
    left: 6,
  },
  dot3: {
    width: 5,
    height: 5,
    backgroundColor: '#F8D7B4',
    borderRadius: 2.5,
    position: 'absolute',
    top: 100,
    left: 3,
  },
  dot4: {
    width: 3,
    height: 3,
    backgroundColor: '#EFAD18',
    borderRadius: 1.5,
    position: 'absolute',
    top: 140,
    left: 5,
  },
  pipe: {
    width: 11,
    height: 171,
    // borderRadius: 5.5, // half of width to make it rounded like a pipe
  },
})

export default Pipe
