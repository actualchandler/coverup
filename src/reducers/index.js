import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './reducer_products'
import orderReducer from './reducer_order'
import historyReducer from './reducer_history'

const rootReducer = combineReducers({
   products: productsReducer
   , form: formReducer
   , order: orderReducer
   , history: historyReducer
})

export default rootReducer