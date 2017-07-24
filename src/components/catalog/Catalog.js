import React, { Component } from 'react'

// *** Components ***
import CatalogList from './catalog-list'
import Footer from '../footer/Footer'

export default class Catalog extends Component {
   render(){
      return (
         <div>
            <CatalogList />
            <Footer />
         </div>
      )
   }
}