import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
import navigationTheme from './navigation/navigationTheme'

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer theme={navigationTheme}>
        <></>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}
