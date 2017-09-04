import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Button } from 'react-bootstrap'


// Components
import Cart from './Cart'
import OrderHistory from './OrderHistory'

// Actions
import { fetchCart } from '../../actions/cart_actions' 
import { fetchHistory } from '../../actions/cart_actions' 

class User extends Component {

  logout() {
    this.props.logout()
  }

  componentWillMount(){
    const { email } = this.props.profile

    this.props.fetchCart(email)
    this.props.fetchHistory(email)

  }

  render() {
      return (
         <div className="container">
                 <div className="profile-area">
                   <Panel header="Your Account">

                       <Panel header="Cart">
                         <Cart cart={ this.props.cart } />
                       </Panel>

                       <Panel header="Order History">
                         <OrderHistory history={ this.props.history} />
                       </Panel>

                   <Button
                       bsStyle="primary"
                       className="btn-margin"
                       onClick={this.logout.bind(this)}
                     >
                       Log Out
                     </Button>
                     </Panel>
                 </div>
               </div>
      )
   }
}

function mapStateToProps(state){
  return {
    cart: state.order
    , history: state.history
  }
}

export default connect(mapStateToProps, { fetchCart, fetchHistory })(User)