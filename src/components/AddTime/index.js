import React from 'react'
import './add-time.scss'

const AddTime = (props) => {
  return (
    <div className="level add-time">
      <div className="title">Add Hours</div>
      <div className="time-picker">
        <div className="timer-block whole">
          <button className="btn">+</button>
          <input type="text" value="0" className="num"/>
          <button className="btn">-</button>
        </div>
        <div className="time-picker__divider">.</div>
        <div className="timer-block partial">
          <button className="btn">+</button>
          <input type="text" value="5" className="num"/>
          <button className="btn">-</button>
        </div>
      </div>
      <button>SUBMIT</button>
    </div>
  )
}

export default AddTime
