const en = {
  cart: 'Cart',
  createAnAccount: 'Create An Account',
  confirmPassword: 'Confirm Password',
  forgotPassword: 'Forgot Password?',
  login: 'Login',
  password: 'Password',
  proceed: 'Proceed',
  save: 'Save',
  signup: 'Sign Up',
  userNameOrEmail: 'Username or Email',
  welcomeBack: 'Welcome\nBack!',
} as const

export default en

// Extracts the keys of translations words as a TypeScript type
export type ColorKeys = keyof typeof en
