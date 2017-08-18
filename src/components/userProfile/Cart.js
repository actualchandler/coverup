import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

// *** actions ***
import { fetchCart } from '../../actions/index'

class Cart extends Component {

   componentDidMount(){
      this.props.fetchCart(this.props.userID)
   }

   renderProducts(){
      return _.map(this.props.cart, product => {
         return (
            <div key={product.order_id}>
               ID: { product.product_id }
            </div>
         )
      })
   }

   render(){
      return (
         <div>
            { this.renderProducts() }
            <Button>
              Place Order
            </Button>
         </div>
      )
   }
}

function mapStateToProps(state){
  return {
    cart: state.order
  }
}

export default connect(mapStateToProps, { fetchCart })(Cart)