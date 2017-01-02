import React from 'react'
import Block from './Block'
import './tracker.scss'

const lastThirty = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
]

const Tracker = (props) => {
  return (
    <div className="level tracker">
      <div className="title">LAST 30 DAYS</div>
      <div className="block-container">
        {lastThirty.map((day, i) => <Block trained={day} key={`block-${i}`}/>)}
      </div>
    </div>
  )
}

export default Tracker
