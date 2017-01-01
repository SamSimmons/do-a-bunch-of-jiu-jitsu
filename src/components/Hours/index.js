import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import theme from '../theme'
import './hours.scss'

const Hours = (props) => {
  return (
    <div className="hours__wrapper">
      <div className="hours__title">300 HOURS OF JITS</div>
      <div className="hours__body">
        <div className="bar-title">Hours completed: {props.hoursCompleted}</div>
        <VictoryChart label="hours completed" height={50} theme={theme} title="hours completed">
          <VictoryAxis label="HOURS COMPLETED" tickCount={3} />
          <VictoryBar
            horizontal={true}
            data={[props.hoursCompleted]}
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

export default Hours
