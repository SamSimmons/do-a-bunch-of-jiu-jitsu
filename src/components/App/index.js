import React, { Component } from 'react'
import Hours from '../Hours'
import Nav from '../Nav'
import AddTime from '../AddTime'
import Tracker from '../Tracker'
import ThisWeek from '../ThisWeek'

const hours = {
  hoursLeft: 300,
  hoursCompleted: 0
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layer-one">
          <Hours {...hours} />
        </div>
        <div className="layer-two">
            <Nav />
            <AddTime />
            <Tracker />
            <ThisWeek />
        </div>
      </div>
    )
  }
}

export default App
