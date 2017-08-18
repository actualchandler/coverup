import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ProductsReducer from './reducer_products'
import OrderReducer from './reducer_order'

const rootReducer = combineReducers({
   products: ProductsReducer
   , form: formReducer
   , order: OrderReducer
})

export default rootReducer