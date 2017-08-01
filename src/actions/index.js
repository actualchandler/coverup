
export const NEW_CONTACT = 'new_contact'

export function newContact(values, callback) {
   const request = axios.post(`${ROOT_URL}`)
   return {
      type: NEW_CONTACT
      , payload: request
   }
}


// add bitch