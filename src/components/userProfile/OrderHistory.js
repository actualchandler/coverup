import React, { Component } from 'react'
import _ from 'lodash'


class OrderHistory extends Component {

   renderProducts(){
      return _.map(this.props.history, order => {
         return (
            <div key={order.order_id}>
              Order ID: { order.order_id }
                { _.map(order.product, product => {
                  return (
                    <div key={ product.product_id }>
                      <p>{ product.description }</p>
                      <p>Color: { product.color }</p>
                      <p>Quantity: { product.qty }</p>
                      <p>Price per item: { product.price }</p>
                    </div>
                  )
                })}
            </div>
         )
      })
   }

   render(){
     if(_.isEmpty(this.props.history)){
       return ( 
         <div>
           <p>You haven't placed any orders yet. </p>
        </div>
       )
      } else {
       return (
          <div>
             { this.renderProducts() }
          </div>
       )
     }
   }
}

export default OrderHistory