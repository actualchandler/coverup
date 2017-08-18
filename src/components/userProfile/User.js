import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import Cart from './Cart'
import OrderHistory from './OrderHistory'

export default class User extends Component {

  goTo(route){
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout()
  }

  componentWillMount() {
    this.setState({ 
      profile: {} 
    })


    const { userProfile, getProfile } = this.props.auth
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile })
      })
    } else {
      this.setState({ 
        profile: userProfile 
      })
    }
  }

  componenetDidMount(){
    this.props.fetchCart(this.state.profile.sub)
  }
   
   render() {
      const { profile } = this.state
      return (
         <div className="container">
                 <div className="profile-area">
                   <h1>{profile.name}</h1>
                   <Panel header="Your Account">
                       <Panel header="Cart">
                         <Cart userID={this.state.profile.sub} />
                       </Panel>
                       <Panel header="Order History">
                         <OrderHistory userID={this.state.profile.sub} />
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