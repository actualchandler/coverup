import _ from 'lodash'
import { FETCH_CART, DELETE_ITEM } from '../actions/cart_actions'

export default function(state = {}, action){
   switch(action.type){
      case DELETE_ITEM:
            return _.omit(state, action.payload)
      case FETCH_CART:
         return _.mapKeys(action.payload.data, 'pio_id')
      default:
         return state
   }
}