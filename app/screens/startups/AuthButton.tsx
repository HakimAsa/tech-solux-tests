import React from 'react'
import TsButton from '@/app/components/buttons/TsButton'

interface AuthButtonProps {
  title: string
  top?: number // Default is 399px (bottom of the screen)
  onPress: () => void
}

export default function AuthButton({
  onPress,
  title,
  top = 399,
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
    >
      {title}
    </TsButton>
  )
}
