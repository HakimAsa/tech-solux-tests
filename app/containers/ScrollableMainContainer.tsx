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
        style={[{ flex: 1 }, style]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        {...otherProps}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidViewContainer>
  )
}
