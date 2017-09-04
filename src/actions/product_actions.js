import axios from 'axios'

// *** VARIABLES ***
import { CONFIG } from './config.js'
const ROOT_URL = CONFIG.ROOT_URL

export const FETCH_PRODUCTS = 'fetch_products'
export const FETCH_PRODUCT = 'fetch_product'
export const CREATE_PRODUCT = 'create_product'

export function fetchProducts(shop) {
   const request = axios.get(`${ROOT_URL}products${shop}`)

   return {
      type: FETCH_PRODUCTS
      , payload: request
   }
}

export function fetchProduct(id) {
   const request = axios.get(`${ROOT_URL}product/${id}`)

   return {
      type: FETCH_PRODUCT, 
      payload: request
   }
}

export function createProduct(values, callback) {
   const request = axios.post(`${ROOT_URL}product/new`, values)
      .then(() => callback())

   return {
      type: CREATE_PRODUCT
      , payload: request
   }
}