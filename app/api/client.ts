import { ApisauceInstance, create } from 'apisauce'

import authStorage from '../context/auth/Storage'
import HM, { httpMethods } from '../utils/httpMethods'
import getApiUrl from '../utils/helpers'
import errorOnHttpReq from '../utils/errorOnHttpReq'

const apiClient: ApisauceInstance = create({
  baseURL: getApiUrl(),
})

apiClient.addAsyncRequestTransform(async (request: any) => {
  const authToken = await authStorage.getToken()
  if (!authToken) return
  request.headers['Authorization'] = `Bearer ${authToken}`
  request.headers['x-auth-token'] = authToken
})

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const httpRequest = async (
  endpoint: string,
  method: httpMethods,
  json?: object | string | boolean,
  headers?: object
) => {
  try {
    await sleep(2000)
    json = !headers ? JSON.stringify(json || {}, null, 2) : json && json
    headers = headers && { ...headers }
    if (!(method in apiClient)) {
      throw new Error(`Invalid method: ${method}`)
    }
    const res =
      method === HM.GET || method === HM.DELETE
        ? apiClient[method](endpoint, headers) //for query parameters
        : apiClient[method](endpoint, json, headers)
    return res
  } catch (error) {
    return errorOnHttpReq(error)
  }
}

export default apiClient

export { httpRequest }
