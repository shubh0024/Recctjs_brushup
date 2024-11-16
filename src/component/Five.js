//implement the toggle button switch compoenent 

import React ,{useState} from 'react'

function Five() {

    const [isToggle,SetisToggle]= useState(false)

    const handleclick = ()=>{
        SetisToggle(!isToggle)
    }
  return (
    <div>
        <label>
        <input type='Checkbox' onChange={handleclick}></input> 
        </label>
        <p>{isToggle? "On" : "off"}</p>
      


    </div>
  )
}

export default Five
