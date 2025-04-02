import * as Yup from 'yup'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+\-*/_!%*?&(),;\[\]])[A-Za-z\d@$#+\-*/_!%*?&(),;\[\]]{8,}$/

const validationSchema = Yup.object()
  .shape({
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match') //"Mismatched passwords"
      .required()
      .min(8),
    email: Yup.string().email().notRequired(),
    username: Yup.string().min(3).notRequired(),

    password: Yup.string()
      .matches(passwordRegex, 'au moins 8 caracteres [A-Z,a-z,0-9,symbols]')
      .required()
      .min(8),
  })
  .test(
    'email-or-username',
    'Either email or username is required',
    (_, context) => {
      const { email, username } = context.parent
      return (email || username) && (email || username).trim() !== '' // At least one must be provided
    }
  )

export default validationSchema
