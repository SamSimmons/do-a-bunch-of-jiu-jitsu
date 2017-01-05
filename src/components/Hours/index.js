import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import { connect } from 'react-redux'
import theme from '../theme'
import './hours.scss'

const Hours = (props) => {
  console.log(props)
  if (!props.hoursLeft) {
    return (
      <div className="loading">loading</div>
    )
  }
  return (
    <div className="hours__wrapper">
      <div className="hours__title">{props.hoursGoal} HOURS OF JITS</div>
      <div className="hours__body">
        <div className="bar-title">Hours completed: {props.hoursComplete}</div>
        <VictoryChart label="hours completed" height={50} theme={theme} title="hours completed">
          <VictoryAxis label="HOURS COMPLETED" tickCount={3} />
          <VictoryBar
            horizontal={true}
            data={[props.hoursComplete]}
            domain={[0, 300]}
            animate={{duration: 5000}}
          />
        </VictoryChart>
        <div className="bar-title">Hours left: {props.hoursLeft}</div>
        <VictoryChart height={50} theme={theme}>
          <VictoryAxis label="HOURS LEFT" tickCount={3} />
          <VictoryBar
            horizontal={true}
            data={[props.hoursLeft]}
            domain={[0, 300]}
            animate={{duration: 5000}}
          />
        </VictoryChart>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({...state.hours})
export default connect(mapStateToProps)(Hours)
