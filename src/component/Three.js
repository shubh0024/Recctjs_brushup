//create the new form which takes the input name and email
import React,{useState} from 'react'

function Three() {
    const [input ,setinput]= useState('')


  return (
    <div>
      <input type='text' value={input} name='' onChange={(e)=>setinput(e.target.value)} placeholder='Enter you name' />
      <p>User Input :{input}</p>
    </div>
  )
}

export default Three
