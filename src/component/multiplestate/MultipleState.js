import React, { useState } from 'react'

function MultipleState() {

  const [state, setState] = useState({
    count:0,
    text:'Hello world !',
    isActive:true
  })


    const handleCount = ()=>{
       setState({...state,count:state.count+1})
    }

    const handleText = ()=>{
      setState({...state,text:!state.text})
    }

    const handleActive = () =>{
        setState({...state,isActive:!state.isActive})
    }
  return (
    <div>
    <h1>Multiple state</h1>
    <p>Count: {state.count}</p>
    <p>Text: {state.text ? 'Hello world' : 'Hey bro kaise ho'}</p>
    <p>Active:{state.isActive ? 'Yes bro i am active ' :'Bro i am deactivated'} </p>

    <button onClick={handleCount} >Increment</button>
    <button onClick={handleText}>ChangeText</button>
    <button onClick={handleActive}>ToggleActive</button>
    

    </div>
  )
}

export default MultipleState
