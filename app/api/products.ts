import { httpRequest } from './client'
import ep from '../config/constants'
import HM from '../utils/httpMethods'
import { doSetForwardslash as sf } from '../utils/helpers'

const { PRODUCTS, TOP } = ep

const getProducts = (): Promise<any> => httpRequest(sf(PRODUCTS), HM.GET)
const getTopRatedProducts = (): Promise<any> =>
  httpRequest(sf(PRODUCTS, TOP), HM.GET)

export default {
  getProducts,
  getTopRatedProducts,
}
