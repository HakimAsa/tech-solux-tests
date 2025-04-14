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
