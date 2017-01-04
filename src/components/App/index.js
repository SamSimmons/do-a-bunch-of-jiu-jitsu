import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hours from '../Hours'
import Nav from '../Nav'
import AddTime from '../AddTime'
import Tracker from '../Tracker'
import ThisWeek from '../ThisWeek'
import Login from '../Login'
import AuthService from '../AuthService'

const auth = new AuthService(process.env.REACT_APP_AUTH_ID, process.env.REACT_APP_AUTH_DOMAIN)

const hours = {
  hoursLeft: 300,
  hoursCompleted: 0
}

class App extends Component {
  render() {
    console.log('logged in', auth.loggedIn())
    if (!auth.loggedIn()) {
      return <Login auth={auth} />
    }
    return (
      <div className="App">
        <div className="layer-one">
          <Hours {...hours} />
        </div>
        <div className="layer-two">
            <Nav auth={auth} />
            <AddTime />
            <Tracker />
            <ThisWeek />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps)(App)
