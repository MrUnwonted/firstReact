import React, { useState } from 'react'
import sample from '../sample.css'

function Hook() {
  const [increment, setIncrement] = useState(10)
  const onAction = () => {
    // Increment the value of the counter
    setIncrement(increment + 5)
  }
  return (
    <div className='sample'>
      <label>{increment}</label>
      <button onClick={onAction}>click</button>
    </div>
  )
}

export default Hook
