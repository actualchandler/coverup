import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// *** actions ***
import { fetchHistory } from '../../actions/index'

class OrderHistory extends Component {

   componentDidMount(){
      this.props.fetchHistory(this.props.userID)
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
         </div>
      )
   }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { fetchHistory })(OrderHistory)