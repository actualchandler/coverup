import React, { Component } from 'react'
import Manager from './Manager'
import User from './User'
import './profile.css'

class Profile extends Component {
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

  render() {
    const { profile } = this.state
    const { isManager } = this.props.auth

      return (
        <div>
          { !isManager(profile.sub) ? (
            <User auth={ this.props.auth } profile={ profile }/>
          ) : (
            <Manager auth={ this.props.auth } />
          )}
        </div>
      )
    }
    
}

export default Profile
