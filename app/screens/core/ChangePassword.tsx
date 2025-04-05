import { StyleSheet } from 'react-native'
import React from 'react'

import BaseScreen from '@/app/components/BaseScreen'
import BasicHeader from '@/app/components/headers/BasicHeader'
import routes from '@/app/navigation/routes'
import TsProps from '@/TsProps'

export default function ChangePassword({ navigation }: TsProps) {
  return (
    <BaseScreen>
      <BasicHeader
        title={routes.CHANGEPASSWORD}
        onPress={() => navigation.goBack()}
      />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})
