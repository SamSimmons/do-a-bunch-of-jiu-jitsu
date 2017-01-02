import React from 'react'

const Block = props => {
  return (
    <div className={`block block--${props.trained}`}></div>
  )
}

export default Block
