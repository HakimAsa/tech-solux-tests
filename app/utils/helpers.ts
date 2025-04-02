import Constants from 'expo-constants'

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

export default getApiUrl
export { convertTimeFormat, doSetForwardslash, doSetFullUrl, validInput }
