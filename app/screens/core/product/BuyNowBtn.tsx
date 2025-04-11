import { Pressable } from 'react-native'

import en from '@/app/config/en'
import ProductCta from './ProductCta'

export default function BuyNowBtn({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <ProductCta
        colors={['#71F9A9', '#31B769']}
        title={en.buyNow}
        innerWidth={136}
      />
    </Pressable>
  )
}
