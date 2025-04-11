import { TextProps } from 'react-native'

import TsText from '@/app/components/texts/TsText'
import { currencySymbolRupee } from '@/app/config/constants'
import { RowContainer } from '@/app/containers'

export default function OrderAmount({
  amountStyle,
  labelStyle,
  label = 'Order Amounts',
  amount = 0,
}: {
  label?: string
  amount?: number
  labelStyle?: TextProps['style']
  amountStyle?: TextProps['style']
}) {
  return (
    <RowContainer>
      <TsText style={[labelStyle]}>{label}</TsText>
      <TsText style={[{ fontFamily: 'Montserrat_600SemiBold' }, amountStyle]}>
        {currencySymbolRupee}
        {amount.toFixed(2)}
      </TsText>
    </RowContainer>
  )
}
