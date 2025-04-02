import * as Yup from 'yup'
import { emailRegex } from '../config/constants'

const loginValidationSchema = Yup.object().shape({
  // email: Yup.string().email('invalid Email'),
  // username: Yup.string().min(3),
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
  password: Yup.string().required().min(8).label('Password'),
})

export default loginValidationSchema
