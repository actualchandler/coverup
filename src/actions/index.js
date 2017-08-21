import axios from 'axios'

// *** VARIABLES ***
import { CONFIG } from './config.js'
const ROOT_URL = CONFIG.ROOT_URL

// *** ACTIONS ***
// Products
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

// Cart
export const ADD_TO_CART = 'add_to_cart'
export const DELETE_ITEM = 'delete_item'
export const FETCH_CART = 'fetch_cart'
export const FETCH_HISTORY = 'fetch_history'

export function addToCart(values, callback) {
   const request = axios.post(`${ROOT_URL}order/create`, values)
      .then(() => callback())

   return {
      type: ADD_TO_CART
      , payload: request
   }
}

export function deleteItem(userID, orderID) {
   const request = axios.delete(`${ROOT_URL}order/delete/${userID}/${orderID}`)

   return {
      type: DELETE_ITEM
      , payload: request
   }
}

export function fetchCart(userID){
   const request = axios.get(`${ROOT_URL}order/cart/${userID}`)

   return {
      type: FETCH_CART
      , payload: request
   }
}

export function fetchHistory(userID){
   const request = axios.get(`${ROOT_URL}order/history/${userID}`)

   return {
      type: FETCH_HISTORY
      , payload: request
   }
}

// User
export const GET_ME = 'get_me'

export function getMe(user) {
   const request = axios.get(`${ROOT_URL}users/me/${user}`)

   return {
      type: GET_ME, 
      payload: request
   }
}