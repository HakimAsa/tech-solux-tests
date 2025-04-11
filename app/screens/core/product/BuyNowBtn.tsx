import en from '@/app/config/en'
import ProductCta from './ProductCta'

export default function BuyNowBtn() {
  return (
    <ProductCta
      colors={['#71F9A9', '#31B769']}
      title={en.buyNow}
      innerWidth={136}
    />
  )
}
