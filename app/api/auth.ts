import apiClient, { httpRequest } from './client'
import ep from '../config/constants'
import { doSetForwardslash as sf } from '../utils/helpers'
import HM from '../utils/httpMethods'

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

const login = (email: string, password: string) =>
  httpRequest(sf(AUTH, LOGIN), HM.POST, { email, password })

const register = (data: object) =>
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
