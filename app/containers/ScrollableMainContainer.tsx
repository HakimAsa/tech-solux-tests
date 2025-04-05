import { ScrollView, ScrollViewProps } from 'react-native'

import KeyboardAvoidViewContainer from './KeyboardAvoidViewContainer'

interface ScrollableMainContainerProps extends ScrollViewProps {}
export default function ScrollableMainContainer({
  children,
  contentContainerStyle,
  style,
  ...otherProps
}: ScrollableMainContainerProps) {
  return (
    <KeyboardAvoidViewContainer>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle, style]}
        {...otherProps}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidViewContainer>
  )
}
