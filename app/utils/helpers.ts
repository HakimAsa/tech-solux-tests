import Constants from 'expo-constants'
import { emailRegex } from '../config/constants'

type ExpoConfigType = {
  extra?: {
    apiUrl?: string
  }
}
const config: ExpoConfigType = Constants.expoConfig || {}
const apiUrl = config.extra?.apiUrl || process.env.EXPO_PUBLIC_API_URL

const convertTimeFormat = function (time: string) {
  // Split the time string into its components
  const [hours, minutes] = time.split(':')
  // Return the formatted time
  return `${hours}:${minutes}`
}

const doSetUserCredentials = function (values: Record<string, string>) {
  const data = { ...values }
  if (emailRegex.test(data.useridentifier)) data.email = data.useridentifier
  else data.username = data.useridentifier
  delete data.useridentifier
  return data
}

const getApiUrl = function () {
  return apiUrl
}

const doSetForwardslash = function (...endpoints: string[]) {
  return endpoints.length === 1 ? `/${endpoints[0]}` : '/' + endpoints.join('/')
}
const validInput = function (param: any) {
  return (
    typeof param === 'undefined' ||
    (!param && typeof param === 'object') ||
    (!param && typeof param === 'number')
  )
}

const doSetFullUrl = function (...endpoints: string[]) {
  if (validInput(endpoints.length))
    throw new Error('Your input array should contain at least one element')
  return getApiUrl() + doSetForwardslash(...endpoints)
}

const calculateListPrice = function (
  sellingPrice: number,
  discountPercent: number
) {
  const discount = (discountPercent - 0.01) / 100
  return parseInt(`${sellingPrice / (1 - discount)}`, 10)
}

function formatNumberWithCurrency(
  number: number,
  currency?: string,
  decimalPrecision: number = 2
): string {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPrecision, // Ensures two decimal places
    maximumFractionDigits: decimalPrecision, // Ensures no more than two decimal places
  }).format(number)
  return currency ? `${currency} ${formattedNumber}` : formattedNumber // Formats the number with commas
}

export default getApiUrl
export {
  calculateListPrice,
  convertTimeFormat,
  doSetForwardslash,
  doSetFullUrl,
  doSetUserCredentials,
  formatNumberWithCurrency,
  validInput,
}
