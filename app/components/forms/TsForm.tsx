import { Formik } from 'formik'
import React from 'react'

interface TsFormProps {
  initialValues: object
  onSubmit: (values: any) => void
  validationSchema: any
  children: React.ReactNode | React.ReactNode[]
}
export default function TrForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: TsFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}
