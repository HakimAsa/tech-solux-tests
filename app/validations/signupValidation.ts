import * as Yup from 'yup'
import { emailRegex } from '../config/constants'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+\-*/_!%*?&(),;\[\]])[A-Za-z\d@$#+\-*/_!%*?&(),;\[\]]{8,}$/

const signupValidationSchema = Yup.object().shape({
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match') //"Mismatched passwords"
    .required()
    .min(8),
  // email: Yup.string().email().notRequired(),
  // username: Yup.string().min(3).notRequired(),
  useridentifier: Yup.string()
    .min(3)
    .test(
      'email-or-username',
      'Either email or username is required',
      (value?: string) => {
        if (!value) return false // Ensure the field is required
        // Check if the value is a valid email
        const isEmail = emailRegex.test(value)
        // Check if the value is a valid username (assuming a simple regex for username)
        const isUsername = value ? /^[a-zA-Z0-9_-]{3,16}$/.test(value) : false
        // Ensure that the value is either an email or a username, but not both
        return (isEmail && !isUsername) || (isUsername && !isEmail)
      }
    )
    .required('Please enter either an email or a username'),

  password: Yup.string()
    .matches(passwordRegex, 'au moins 8 caracteres [A-Z,a-z,0-9,symbols]')
    .required()
    .min(8),
})

export default signupValidationSchema
