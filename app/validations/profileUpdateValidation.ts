import * as Yup from 'yup'
import { passwordRegex } from '@/app/config/constants'
import en from '../config/en'

const profileUpdateValidationSchema = Yup.object().shape({
  address: Yup.string(),
  avatar: Yup.mixed(),
  bankaccountholdername: Yup.string(),
  bankaccountnumer: Yup.number(),
  city: Yup.string(),
  country: Yup.string(),
  email: Yup.string().email().label(en.emailAddress),
  ifsccode: Yup.string(),
  password: Yup.string()
    .matches(passwordRegex, 'At least 8 characters [A-Z,a-z,0-9,symbols]')
    .min(8),
  pincode: Yup.number(),
  state: Yup.string(),
  username: Yup.string().label(en.emailAddress),
})

export default profileUpdateValidationSchema
