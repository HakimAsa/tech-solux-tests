import React from 'react'
import TsButton from '@/app/components/buttons/TsButton'

interface AuthButtonProps {
  title: string
  top?: number // Default is 399px (bottom of the screen)
  disabled?: boolean // Default is false. Set to true to disable the button. 0% opacity and text color will be applied. 100% opacity and text color will be applied. 100% opacity and text color will be applied. 100% opacity and text color will be applied. 100% opacity and text color will be applied. 100% opacity and text color will be applied. 100% opacity and text
  onPress: () => void
}

export default function AuthButton({
  onPress,
  title,
  top = 399,
  disabled = false,
}: AuthButtonProps) {
  return (
    <TsButton
      button={{
        position: 'absolute',
        top,
        left: 29,
        bottom: 21,
        width: 317,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {title}
    </TsButton>
  )
}
