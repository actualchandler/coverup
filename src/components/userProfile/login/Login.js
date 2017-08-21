import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './login.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="set-index">
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="default"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="default"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Account
                  </Button>
                )
            }
        {/* <div className="container">
          {this.props.children}
        </div> */}
      </div>
    );
  }
}

export default App;
