import apiClient, { httpRequest } from './client'
import ep from '../config/constants'
import HM from '../utils/httpMethods'
import { doSetForwardslash as sf } from '../utils/helpers'

const {
  AUTH,
  LOGIN,
  LOGOUT,
  ME,
  OTP,
  REGISTER,
  REQUESTFORGOTPASSWORDOTP,
  RESEND,
  RESETPASSWORDOTP,
  UPDATEPROFILEPICTURE,
  VERIFY,
} = ep
export interface LoginCredentials {
  email?: string
  username?: string
  password: string
}

const login = (data: LoginCredentials): Promise<any> =>
  httpRequest(sf(AUTH, LOGIN), HM.POST, data)

const logout = (): Promise<any> => httpRequest(sf(AUTH, LOGOUT), HM.GET)
const getMe = (): Promise<any> => httpRequest(sf(AUTH, ME), HM.GET)

const register = (data: object): Promise<any> =>
  httpRequest(sf(AUTH, REGISTER), HM.POST, data)

const requestForgotPasswordOTP = (data: object) =>
  httpRequest(sf(AUTH, REQUESTFORGOTPASSWORDOTP), HM.POST, data)

const resetPasswordOTP = (data: object) =>
  httpRequest(sf(AUTH, RESETPASSWORDOTP), HM.POST, data)

const updateAvatar = (data: object) => {
  const imageData = new FormData()
  data?.image.forEach((image, index) => {
    const fileUri = image.uri
    const fileName = 'image' + index + image.fileName
    const fileType = image.mimeType
    imageData.append('avatar', {
      type: fileType,
      uri: fileUri,
      name: fileName,
    })
  })
  return httpRequest(sf(AUTH, UPDATEPROFILEPICTURE), HM.PATCH, imageData, {
    // onUploadProgress: (progress) => {
    //   onUploadProgress && onUploadProgress(progress.loaded / progress.total)
    // },
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
  })
}

const resendOPTCode = (email: string, userId: string) =>
  apiClient.post(sf(AUTH, VERIFY, RESEND, OTP), { email, userId })
export default {
  getMe,
  login,
  logout,
  register,
  requestForgotPasswordOTP,
  resetPasswordOTP,
  resendOPTCode,
}
