import DayOfDealBanner from './DealOfTheDayBanner'
import en from '@/app/config/en'

export default function TrendingProductsBanner({
  onPress,
}: {
  onPress: () => void
}) {
  return (
    <DayOfDealBanner
      onPress={onPress}
      mode="calendar"
      color="#FD6E87"
      title={en.trendingProduct}
    />
  )
}
