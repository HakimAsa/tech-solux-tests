import { TextProps } from 'react-native'

import TsText from '@/app/components/texts/TsText'
import { currencySymbolRupee } from '@/app/config/constants'
import { RowContainer } from '@/app/containers'
import { formatNumberWithCurrency } from '@/app/utils/helpers'

export default function OrderAmount({
  amountStyle,
  labelStyle,
  currency = currencySymbolRupee,
  label = 'Order Amounts',
  amount = 0,
}: {
  amount?: number
  currency?: string
  label?: string
  labelStyle?: TextProps['style']
  amountStyle?: TextProps['style']
}) {
  return (
    <RowContainer>
      <TsText style={[labelStyle]}>{label}</TsText>
      <TsText style={[{ fontFamily: 'Montserrat_600SemiBold' }, amountStyle]}>
        {formatNumberWithCurrency(amount, currency)}
      </TsText>
    </RowContainer>
  )
}
