import DayOfDealBanner from './DayOfDealBanner'
import en from '@/app/config/en'

export default function TrendingProductsBanner() {
  return (
    <DayOfDealBanner
      mode="calendar"
      color="#FD6E87"
      title={en.trendingProduct}
    />
  )
}
