const en = {
  buttonYouAgree: 'button, you agree',
  byClickingThe: 'By clicking the',
  cart: 'Cart',
  chooseProducts: 'Choose Products',
  createAccount: 'Create Account',
  createAnAccount: 'Create An Account',
  createAnAccountLineBreak: 'Create an\nAccount',
  confirmPassword: 'ConfirmPassword',
  forgotPassword: 'Forgot Password?',
  getYourOrder: 'Get Your Order',
  iAlreadyHaveAnAccount: 'I Already Have an Account',
  login: 'Login',
  makePayment: 'Make Payment',
  password: 'Password',
  proceed: 'Proceed',
  register: 'Register',
  save: 'Save',
  signup: 'Sign Up',
  toThePublicOffer: 'to the public offer',
  userNameOrEmail: 'Username or Email',
  welcomeBack: 'Welcome\nBack!',
} as const

export default en

// Extracts the keys of translations words as a TypeScript type
export type enKeys = keyof typeof en
