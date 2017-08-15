import _ from 'lodash'
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/index'

export default function(state = {}, action){
   switch(action.type){
      case FETCH_PRODUCT:
            return action.payload.data
      case FETCH_PRODUCTS:
         return _.mapKeys(action.payload.data, 'product_id')
      default:
            return state
   }
}