import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatePicker from 'react-datepicker'
import * as actions from '../../actions'
import './add-time.scss'
import 'react-datepicker/dist/react-datepicker.css'

const highlightText = e => e.target.select()

const AddTime = (props) => {
  return (
    <div className="level add-time">
      <div className="title">Add Hours</div>
      <div className="time-picker">
        <div className="timer-block whole">
          <button className="btn" onClick={props.incrementWholeHours}>+</button>
          <input
            type="text"
            value={props.wholeHours}
            onChange={(e) => props.setWholeHours(e.target.value)}
            className="num"
            onClick={highlightText}
          />
          <button className="btn" onClick={props.decrementWholeHours}>-</button>
        </div>
        <div className="time-picker__divider">.</div>
        <div className="timer-block partial">
          <button className="btn" onClick={props.incrementPartialHours}>+</button>
          <input
            type="text"
            value={props.partialHours}
            onChange={e => props.setPartialHours(e.target.value)}
            className="num"
            onClick={highlightText}
          />
          <button className="btn" onClick={props.decrementPartialHours}>-</button>
        </div>
      </div>
      <DatePicker selected={props.date} dateFormat="DD/MM/YYYY" onChange={(e) => props.setDate(e)}/>
      <button onClick={props.testRedux}>SUBMIT</button>
    </div>
  )
}
const mapStateToProps = state => {
  return { ...state.addTime }
}

const mapActionCreatorsToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps)(AddTime)
