import React, { createContext, useReducer } from 'react'
import reducer from '../Reducers/CounterReducer'
import Decrement from './Decrement'
import Increment from './Increment'
import Reset from './Reset'
export const CounterContext=createContext()
const Counter = () => {
    const initialState={
        count:0
    }
   
    const [state,dispatch]=useReducer(reducer,initialState)
    console.log("The value is:",state.count)
  return (
    <div>
     <CounterContext.Provider value={{Data:state,Dipatch:dispatch}}>
        <h1>
            The Counter Value is:{state.count}
        </h1>
       <Increment/>
       <Decrement/>
       <Reset/>
     </CounterContext.Provider>
    </div>
  )
}
export default Counter
