import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import history from './history'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './my-reset.css'

// *** Components ***
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Catalog from './components/catalog/Catalog'
import Shop from './components/shop/Shop'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

export const makeMainRoutes = () => {
   return (
      <Provider store={createStoreWithMiddleware(reducers)}>
         <BrowserRouter>
         <div>
               <NavBar/>
               <Route exact path='/' component ={ Home } />
               <Route exact path='/about' component ={ About } />
               <Route exact path='/catalog' component ={ Catalog } />
               <Route exact path='/contact' component ={ Contact } />
               <Route exact path='/shop' component ={ Shop } />
         </div>
         </BrowserRouter>
      </Provider>
   )
}