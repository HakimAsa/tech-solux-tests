import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TsText from '@/app/components/texts/TsText'
import colors from '@/app/config/colors'

export default function RemainingTime() {
  const [timeLeft, setTimeLeft] = useState('')

  const calculateRemainingTime = () => {
    const now = new Date()
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )
    const timeDifference = tomorrow.getTime() - now.getTime()

    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    )
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    const hoursStr = hours.toString().padStart(2, '0')
    const minutesStr = minutes.toString().padStart(2, '0')
    const secondsStr = seconds.toString().padStart(2, '0')

    return `${hoursStr}h ${minutesStr}m ${secondsStr}s remaining`
  }

  useEffect(() => {
    const updateTime = () => {
      setTimeLeft(calculateRemainingTime())
    }

    updateTime() // set initial value immediately
    const interval = setInterval(updateTime, 1000) // update every second

    return () => clearInterval(interval) // cleanup on unmount
  }, [])

  return (
    <TsText
      small
      style={{
        color: colors.white,
        lineHeight: 16,
        left: 5,
        fontFamily: 'Montserrat_400Regular',
      }}
    >
      {timeLeft}
    </TsText>
  )
}

const styles = StyleSheet.create({})
