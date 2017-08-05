import React from 'react'
import { Redirect, Route, BrowserRouter } from 'react-router-dom'
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
import Profile from './components/userProfile/Profile'

// *** Authentication ***
import Auth from './auth/Auth/Auth'
import Callback from './auth/Callback/Callback'
import history from './history'

import App from './App'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
            auth.handleAuthentication()
      }
}


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

export const makeMainRoutes = () => {
   return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter history={history}>
        <div>
          <NavBar />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>    
          <Route exact path="/about" component={ About } /> 
          <Route exact path="/contact" component={ Contact } /> 
          <Route exact path="/catalog" component={ Catalog } />
          <Route exact path="/shop" component={ Shop } /> 
        </div>
      </BrowserRouter>
    </Provider>
   )
}
         