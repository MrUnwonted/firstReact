import React, { useState } from 'react'
import sample from '../sample.css'

function Hook() {
  const [increment, setIncrement] = useState(10)
  const [decrement, setDecrement] = useState(increment)
  const onAction = () => {
    // Increment the value of the counter
    setIncrement(increment + 5)
    setDecrement(decrement - 1)
  }
  // const onSet = () =>{
  //     // Decrement the value of the counter
  //     // setDecrement(increment - 1)
      
  // }
  return (
    <div className='sample'>
      <label>{increment}</label>
      <button onClick={onAction}>Increment</button>
      &nbsp;&nbsp;&nbsp;
      {/* <label>{decrement}</label> */}
      {/* <button onClick={() => {
        setDecrement(decrement - 1)
      }}>click</button> */}
      <button onClick={onAction}>Decrement</button>
    </div>
  )
}

export default Hook
