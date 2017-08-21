import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'

// Components
import Cart from './Cart'
import OrderHistory from './OrderHistory'

class User extends Component {

  goTo(route){
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout()
  }
   
   render() {
      const { profile } = this.props

      return (
         <div className="container">
                 <div className="profile-area">
                   <h1>{profile.name}</h1>
                   <Panel header="Your Account">
                       <Panel header="Cart">
                         <Cart auth={ this.props.auth } userID={ profile.sub } />
                       </Panel>
                       <Panel header="Order History">
                         <OrderHistory userID={ profile.sub } />
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

export default User