import { useFormikContext } from 'formik'

import TsButton from '../buttons/TsButton'
import AuthButton from '@/app/screens/startups/AuthButton'

interface Submit {
  button?: object
  disabled?: boolean
  title: string
}

export default function SubmitAuthButton({
  title,
  disabled = false,
  button,
}: Submit) {
  const { handleSubmit } = useFormikContext()
  return (
    <AuthButton
      disabled={disabled}
      title={title}
      onPress={handleSubmit}
    />
  )
}
