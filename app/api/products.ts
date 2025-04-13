import { httpRequest } from './client'
import ep from '../config/constants'
import HM from '../utils/httpMethods'
import { doSetForwardslash as sf } from '../utils/helpers'

const { PRODUCTS } = ep

const getProducts = (): Promise<any> => httpRequest(sf(PRODUCTS), HM.GET)

export default {
  getProducts,
}
