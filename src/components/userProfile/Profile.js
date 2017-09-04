
import React, { Component } from 'react'
import _ from 'lodash'

// ** Components
import User from './User'
import Manager from './Manager'

// ** Style
import './profile.css'

class Profile extends Component {
   constructor(props) {
      super(props)
      this.state = {
         profile: {}
      }
   }

   componentWillMount(){
      const { userProfile, getProfile } = this.props.auth
  
      if (!userProfile) {
        getProfile((err, profile) => {
          this.setState({ profile })
        })
      } else (
        this.setState({
          profile: userProfile
        })
      )
      }

    render() {
      const { email } = this.state.profile

      if(_.isEmpty(this.state.profile)){
        return (
          <div>
            Loading....
          </div>
        )
      } else if(this.props.auth.isManager(email)){
        return (
          <div>
              <Manager auth={ this.props.auth }/>
          </div>
        )
      } else {
        return (
          <div>
            <User logout = { this.props.auth.logout } profile={ this.state.profile } />
          </div>
        )
      }
      }
      
  }
  
  export default Profile
