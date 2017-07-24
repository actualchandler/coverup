import React, { Component } from 'react'

// *** Components ***
import Header from './header/header'
import Footer from '../footer/Footer'
import Services from './services/services'
import Vid from './vid/vid'

import './home.css'

export default class Home extends Component {
   render() {
      return (
            <div className="background">
               <Header />
               <Vid />
               <Services />
               <Footer />
            </div>
      )
   }
}

