import React, { Component } from 'react'

import Locations from './location/Location'
import Footer from '../footer/Footer'

export default class Contact extends Component {
   render(){
      return (
         <div>
            <h1 className="header-h1">Contact Us</h1>
            <Locations />
            <Footer />
         </div>
      )
   }
}