import axios from 'axios'

// *** VARIABLES ***
import { CONFIG } from './config.js'
const ROOT_URL = CONFIG.ROOT_URL

export const ADD_TO_CART = 'add_to_cart'
export const DELETE_ITEM = 'delete_item'
export const FETCH_CART = 'fetch_cart'
export const FETCH_HISTORY = 'fetch_history'
export const COMPLETE_ORDER = 'complete_order'

export function addToCart(values, callback) {
   console.log('Action: Add to Cart')
   const request = axios.post(`${ROOT_URL}order/add`, values)
      .then(() => callback())

   return {
      type: ADD_TO_CART
      , payload: request
   }
}

export function deleteProduct(pio_id) {
   console.log('Action: Delete from Cart')
   const request = axios.delete(`${ROOT_URL}order/delete/${pio_id}`)

   return {
      type: DELETE_ITEM
      , payload: request
   }
}

export function fetchCart(email){
   console.log(`Action: Fetch Cart with ${email}`)
   const request = axios.get(`${ROOT_URL}order/${email}`)

   return {
      type: FETCH_CART
      , payload: request
   }
}

export function fetchHistory(userID){
   console.log('Action: Fetch Order History')
   const request = axios.get(`${ROOT_URL}order/history/${userID}`)

   return {
      type: FETCH_HISTORY
      , payload: request
   }
}

export function completeOrder(orderID){
   const request = axios.put(`${ROOT_URL}order/complete/${orderID}`)

   return {
      type: COMPLETE_ORDER
      , payload: request
   }
}