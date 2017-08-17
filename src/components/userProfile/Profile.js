import React, { Component } from 'react'
import { Panel, ControlLabel, Glyphicon, Button } from 'react-bootstrap'
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

  render() {
    const { profile } = this.state
    const { isManager } = this.props.auth

    if (!isManager(profile.sub)){
      return (
        <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
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
    } else {
      return (
        <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </Button>
            <Button
                bsStyle="default"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'addproduct')}
              >
                Add Product
              </Button>
            </Panel>
        </div>
      </div>
      )
    }
  }
}

export default Profile
