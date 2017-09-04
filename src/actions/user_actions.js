import axios from 'axios'

// *** VARIABLES ***
import { CONFIG } from './config.js'
const ROOT_URL = CONFIG.ROOT_URL

export const FETCH_USER = 'fetch_user'

export function getMe(email) {
   console.log('Getting User with:', email)
   const request = axios.get(`${ROOT_URL}users/me/${email}`)

   return {
      type: FETCH_USER, 
      payload: request
   }
}