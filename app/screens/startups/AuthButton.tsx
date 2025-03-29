import React from 'react'
import TsButton from '@/app/components/buttons/TsButton'

interface AuthButtonProps {
  title: string
  onPress: () => void
}

export default function AuthButton({ onPress, title }: AuthButtonProps) {
  return (
    <TsButton
      button={{
        position: 'absolute',
        top: 399,
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
