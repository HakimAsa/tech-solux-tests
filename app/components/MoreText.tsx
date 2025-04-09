import React, { useState, useRef } from 'react'
import { Text, View, TouchableOpacity, Pressable } from 'react-native'
import TsText from './texts/TsText'
import { StyleSheet } from 'react-native'
import colors from '../config/colors'

export default function MoreText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)
  //   const [isTruncated, setIsTruncated] = useState(false)
  const [fullHeight, setFullHeight] = useState(0)
  const containerRef = useRef(null)

  const WORD_LIMIT = 48 // clamping after 85 words

  const countWords = (text: string) => {
    const words = text.split(' ')
    return words.length
  }
  const isTruncated = countWords(text) > WORD_LIMIT

  const truncatedText = text.split(' ').slice(0, WORD_LIMIT).join(' ')
  console.log(countWords(text))

  //   const onTextLayout = (e: any) => {
  //     if (e.nativeEvent.lines.length > numberOfLines) {
  //       setIsTruncated(true)
  //     }
  //   }

  return (
    <View>
      <TsText
        small
        style={styles.longText}
      >
        {expanded || !isTruncated ? text : `${truncatedText} ...`}
        {isTruncated && (
          <Pressable onPress={() => setExpanded(!expanded)}>
            <TsText
              small
              style={styles.toggleText}
            >
              {expanded ? ' Less' : 'More'}
            </TsText>
          </Pressable>
        )}
      </TsText>
    </View>
  )
}

const styles = StyleSheet.create({
  longText: {
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 16,
    color: colors.black,
    marginVertical: 1,
  },
  toggleText: {
    fontFamily: 'Montserrat_400Regular',
    color: colors.secondary,
    alignSelf: 'center',
    top: 4,
  },
})
