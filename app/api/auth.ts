import apiClient, { httpRequest } from './client'
import ep from '../config/constants'
import { doSetForwardslash as sf } from '../utils/helpers'
import HM from '../utils/httpMethods'
import { ApiResponse } from 'apisauce'

const {
  AUTH,
  LOGIN,
  OTP,
  REGISTER,
  REQUESTFORGOTPASSWORDOTP,
  RESEND,
  RESETPASSWORDOTP,
  VERIFY,
} = ep
export interface LoginCredentials {
  email?: string
  username?: string
  password: string
}

const login = (data: LoginCredentials): Promise<any> =>
  httpRequest(sf(AUTH, LOGIN), HM.POST, data)

const register = (data: object): Promise<any> =>
  httpRequest(sf(AUTH, REGISTER), HM.POST, data)

const requestForgotPasswordOTP = (data: object) =>
  httpRequest(sf(AUTH, REQUESTFORGOTPASSWORDOTP), HM.POST, data)

const resetPasswordOTP = (data: object) =>
  httpRequest(sf(AUTH, RESETPASSWORDOTP), HM.POST, data)

const resendOPTCode = (email: string, userId: string) =>
  apiClient.post(sf(AUTH, VERIFY, RESEND, OTP), { email, userId })
export default {
  login,
  register,
  requestForgotPasswordOTP,
  resetPasswordOTP,
  resendOPTCode,
}
