import { Text, View } from 'react-native'
import TsText from './components/texts/TsText'
import TsButton from './components/buttons/TsButton'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TsText>Edit app/index.tsx to edit this screen.</TsText>
      <TsButton onPress={() => console.log('tapped')}>Press</TsButton>
    </View>
  )
}
