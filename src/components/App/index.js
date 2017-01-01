import React, { Component } from 'react'
import Hours from '../Hours'
import Nav from '../Nav'

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
        </div>
      </div>
    )
  }
}

export default App
