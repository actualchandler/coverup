import React, { Component } from 'react'
import Manager from './Manager'
import User from './User'
import './profile.css'

class Profile extends Component {
  goTo(route){
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
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
    const { isManager } = this.props.auth
    if (!isManager(profile.sub)){
      return (
        <div>
          <User auth={ this.props.auth } />
        </div>
      )
    } else {
      return (
        <div>
          <Manager auth={ this.props.auth } />
        </div>
      )
    }
  }
}

export default Profile
