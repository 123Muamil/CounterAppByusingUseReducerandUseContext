import React, { useContext } from 'react'
import { CounterContext } from './Counter'
const Increment = () => {
    const {Data,Dipatch}=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>Dipatch({type:"Increment"})}>Increment</button>
    </div>
  )
}

export default Increment
