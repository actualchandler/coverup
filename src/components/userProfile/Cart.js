import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

// *** Actions
import { deleteProduct } from '../../actions/cart_actions'
import { completeOrder } from '../../actions/cart_actions' 


class Cart extends Component {
  constructor(props){
    super(props)

    this.renderProducts = this.renderProducts.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
  }

  completeOrder(orderID){
    this.props.completeOrder(orderID)
    window.location.reload()
  }
  
  onDeleteClick(pio_id) {
    this.props.deleteProduct(pio_id)
    window.location.reload()
  }

  renderProducts(){
   return  _.map(this.props.cart, product => {
      return (
        <div key={ product.pio_id }>
          <p>{ product.description }</p>
          <p>{ product.fabric }</p>
          <p>{ product.price }</p>
          <p>Color: { product.color }</p>
          <p>Size: { product.size }</p>
          <p>Quantity: { product.qty }</p>
          <Button
          bsStyle='danger'
          onClick={ () => { this.onDeleteClick(product.pio_id) } }>
          Remove
          </Button>
        </div>
      )
    })
  }

  render() {
    const { cart } = this.props
    
    if(_.isEmpty(this.props.cart)){
      return (
        <div>
          <p>Your cart is empty.</p>
        </div>
      )
    } else {
      return (
        <div>
          { this.renderProducts() }
          <Button
          bsStyle='default'
          onClick={ () => this.completeOrder(cart[Object.keys(cart)[0]].order_id) }>
          Complete Order
          </Button>
        </div>
      )
    }
  }


}

export default connect(null, { deleteProduct, completeOrder })(Cart)