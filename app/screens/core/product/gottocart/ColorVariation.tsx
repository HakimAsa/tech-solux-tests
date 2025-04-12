import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TsText from '@/app/components/texts/TsText'
import { RowContainer } from '@/app/containers'

export default function ColorVariation({
  colorList,
}: {
  colorList?: string[]
}) {
  return (
    <RowContainer style={{ alignItems: 'center' }}>
      <View style={{ height: 22, width: 67, flex: 1 }}>
        <TsText
          small
          style={{ lineHeight: 22 }}
        >
          Variations :
        </TsText>
      </View>
      <RowContainer
        style={{ justifyContent: 'space-around', gap: 5, flex: 1, padding: 5 }}
      >
        {colorList?.map((color, index) => (
          <View
            key={index.toString()}
            style={{
              //   width: 39,
              flex: 1,
              height: 17,
              borderColor: '#0E0808',
              borderWidth: 0.3,
              borderRadius: 2,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                // width: 30,
                flex: 1,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
                top: -4,
              }}
            >
              <TsText
                style={{ fontSize: 10, lineHeight: 22, alignSelf: 'center' }}
              >
                {color}
              </TsText>
            </View>
          </View>
        ))}
      </RowContainer>
    </RowContainer>
  )
}

const styles = StyleSheet.create({})
