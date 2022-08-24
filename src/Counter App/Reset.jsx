import React, { useContext } from 'react'
import { CounterContext } from './Counter'
const Reset = () => {
    const{Data,Dipatch}=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>Dipatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default Reset
