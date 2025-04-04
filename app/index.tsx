import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
import navigationTheme from './naviagtion/navigationTheme'

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer theme={navigationTheme}>
        <></>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}
