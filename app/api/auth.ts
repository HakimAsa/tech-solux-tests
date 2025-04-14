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

const updateDetails = (data: any) =>
  httpRequest(sf(AUTH, 'updatedetails'), HM.PUT, data)

const updateAvatar = (data: Record<any, any>) => {
  const formData = new FormData()
  const fileUri = data.uri
  const fileName = 'image' + data.fileName
  const fileType = data.mimeType
  formData.append('avatar', {
    type: fileType,
    uri: fileUri,
    name: fileName,
  } as any)
  return httpRequest(sf(AUTH, UPDATEPROFILEPICTURE), HM.PATCH, formData, {
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
  updateAvatar,
  requestForgotPasswordOTP,
  resetPasswordOTP,
  resendOPTCode,
  updateDetails,
}
