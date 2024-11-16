//Create a simple counter application using the  useReducer to manage the state

import React,{useReducer} from 'react'

function Counter() {

    function reducer(state,action){
      switch(action.type){
        case 'INC':
            return {count:state.count + 1}
        case 'DEC':
            return {count:state.count - 1}
         case 'RESET':
            return {count:0}
      }
    }

    const [state,dispatch]=useReducer(reducer,{count:0});


  return (
    <div>
      <h1>Counter is present <span>!Click and see the magic </span></h1>

      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'INC'})}>+</button>

      <button onClick={()=>dispatch({type:'DEC'})}>-</button>

      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default Counter
