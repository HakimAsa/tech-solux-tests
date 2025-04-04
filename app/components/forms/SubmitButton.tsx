import { useFormikContext } from 'formik'

import TsButton from '../buttons/TsButton'

interface Submit {
  button?: object
  disabled?: boolean
  title: string
}

export default function SubmitButton({
  title,
  disabled = false,
  button,
}: Submit) {
  const { handleSubmit } = useFormikContext()
  return (
    <TsButton
      button={button}
      disabled={disabled}
      onPress={handleSubmit}
    >
      {title}
    </TsButton>
  )
}
