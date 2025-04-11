import { Image, Pressable, StyleSheet, TextProps } from 'react-native'
import React from 'react'
import RowContainer from '../containers/RowContainer'
import TsText from './texts/TsText'
import en from '../config/en'
import colors from '../config/colors'

export default function FilterSortBanner({
  textStyle,
  title = en.allFeatured,
}: {
  textStyle?: TextProps['style']
  title?: string
}) {
  return (
    <RowContainer>
      <TsText style={[styles.text, textStyle]}>{title}</TsText>
      <RowContainer>
        <Pressable
          style={styles.sort}
          onPress={() => alert('Sorting')}
        >
          <TsText
            small
            style={styles.sortText}
          >
            Sort
          </TsText>
          <Image
            source={require('@/assets/images/sort.png')}
            style={{ width: 16, height: 16, marginLeft: 6 }}
          />
        </Pressable>
        <Pressable
          style={styles.filter}
          onPress={() => alert('Filtering')}
        >
          <TsText
            small
            style={styles.sortText}
          >
            Filter
          </TsText>
          <Image
            source={require('@/assets/images/filter.png')}
            style={{ width: 16, height: 16, marginLeft: 6 }}
          />
        </Pressable>
      </RowContainer>
    </RowContainer>
  )
}

const styles = StyleSheet.create({
  filter: {
    backgroundColor: colors.white,
    borderRadius: 6,
    height: 24,
    width: 64,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sort: {
    backgroundColor: colors.white,
    borderRadius: 6,
    marginRight: 10,
    height: 24,
    width: 61,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortText: {
    color: colors.black,
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
  },
})
