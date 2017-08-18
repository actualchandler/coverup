import _ from 'lodash'
import { FETCH_CART } from '../actions/index'

export default function(state = {}, action){
   switch(action.type){
      case FETCH_CART:
         return _.mapKeys(action.payload.data, 'order_id')
      default:
         return state
   }
}