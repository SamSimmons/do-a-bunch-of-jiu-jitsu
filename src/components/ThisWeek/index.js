import React from 'react'
import { VictoryPie } from 'victory'
import theme from '../theme'
import './this-week.scss'


const data = [
  {
    title: "Mon",
    hours: 2
  },
  {
    title: "Tues",
    hours: 3
  },
  {
    title: "Wed",
    hours: 2
  },
  {
    title: "Thurs",
    hours: 0
  },
  {
    title: "Fri",
    hours: 1
  },
  {
    title: "Sat",
    hours: 2
  },
  {
    title: "Sun",
    hours: 0
  }
]

const ThisWeek = (props) => {
  return (
    <div className="level this-week">
      <div className="title">THIS WEEK</div>
      <VictoryPie data={data} x="title" y="hours" theme={theme} labels={datum => {
        return datum.hours > 0 ? datum.title : ""
      }}/>
    </div>
  )
}

export default ThisWeek
