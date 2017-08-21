import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap' 
import _ from 'lodash'

import './shop.css'

// *** actions ***
import { fetchProducts } from '../../actions/index'

class ProductsIndex extends Component {
     goTo(route) {
            this.props.history.replace(`/${route}`)
      }

   componentDidMount() {
      this.props.fetchProducts(this.props.location.pathname)
   }

   renderProducts() {
      return _.map(this.props.products, product =>{
         return (
            <div className='col-md-2' key={product.product_id}>
               <Panel
                  onClick={this.goTo.bind(this, `product/${product.product_id}`)}>
                      <img className='product-img' src={ require(`../../img/shop${this.props.location.pathname}/${product.image_url}`) } alt="Product" /><br/> 
                      { product.description }<br/>
                      { product.product_id }
               </Panel>
            </div>
         )
      })
   }

   render() {
      return (
         <div>
            <h3>Products </h3>
            <div className='row'>
               { this.renderProducts() }
            </div>
         </div>

      )
   }
}

function mapStateToProps(state){
    console.log(state.products)
   return { 
      products: state.products
   }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsIndex)