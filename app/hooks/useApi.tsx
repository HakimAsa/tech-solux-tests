import { useState } from 'react'

export type ApiResponse<T> = {
  ok: boolean
  status: number
  data: any
}

type ApiFunction<T, Args extends any[]> = (
  ...args: Args
) => Promise<ApiResponse<T>>

export default function useApi<T, Args extends any[]>(
  apiFunc: ApiFunction<T, Args>
) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const request = async (...args: Args): Promise<ApiResponse<T>> => {
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)
    setError(!response?.ok)
    setData(response?.data?.data ?? null)
    setMessage(
      !response
        ? 'Unauthorized!'
        : !response?.ok
        ? response?.data?.errorMessage ||
          response?.data?.message ||
          'An error occurred'
        : null
    )

    return response
  }

  return { data, error, loading, message, request, setLoading }
}
