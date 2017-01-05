import React from 'react'
import './nav.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/auth-actions'

const Nav = (props) => {
  const token = props.auth.getToken()
  props.getUserData(token)
  return (
    <nav className="level">
      <span>Edit</span>
      <span
        onClick={() => {
          props.auth.logout()
          props.logOut()
        }
      }>Logout</span>
    </nav>
  )
}

const mapStateToProps = state => ({...state.auth})
const mapActionCreatorsToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps)(Nav)
