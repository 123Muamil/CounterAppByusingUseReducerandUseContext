import React, { useContext } from 'react'
import { CounterContext } from './Counter'
const Decrement = () => {
    const{Data,Dipatch}=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>Dipatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default Decrement
