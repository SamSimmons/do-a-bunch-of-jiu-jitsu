import React, { Component } from 'react'
// import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/auth-actions'
import './login.scss'

class Login extends Component {
  render() {
    const { auth } = this.props
    return (
      <div className="login-wrapper">
        <div className="login">
          <button onClick={auth.login}>Log in</button>
          <button onClick={auth.login}>Register</button>
        </div>
      </div>
    )
  }
}

const mapActionCreatorsToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(null, mapActionCreatorsToProps)(Login)
