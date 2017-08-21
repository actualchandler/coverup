import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

import { fetchCart } from '../../actions/index'
import { deleteItem } from '../../actions/index'

class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetchedCart: false
    }

    this.deleteItem = this.deleteItem.bind(this)
  }

  componentWillUpdate(nextProps, nextState){
    if(_.isEmpty(this.props.cart) && this.state.fetchedCart === false){
      this.props.fetchCart(nextProps.userID)
      this.setState({
        fetchedCart: true
      })
    }
  }

  deleteItem(orderID){
    this.props.deleteItem(this.props.userID, orderID).then(
      window.location.reload()
    )
  }

  renderProducts() {
    if(_.isEmpty(this.props.cart)){
      return (
        <p>Your Cart is Empty.</p>
      )
    } else {
      return _.map(this.props.cart, product => {
        return (
          <div key={product.order_id}>
            { product.product_id }
            { product.color }
            { product.price }
            { product.qty }
            { product.size }
            <Button 
              bsStyle="danger"
              onClick={ () => { this.deleteItem(product.order_id) } }>
              Remove
            </Button>
          </div>
        )
      })
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.renderProducts() }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.order
  }
}

export default connect(mapStateToProps, { fetchCart, deleteItem })(Cart)