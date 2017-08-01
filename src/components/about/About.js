import React, { Component } from 'react'

import AboutUs from './aboutUs'
import Quote from '../quote/Quote'
import Footer from '../footer/Footer'

export default class About extends Component {
   render(){
      return (
         <div>
            <AboutUs />
            <Quote />
             <Footer /> 
         </div>
      )
   }
}