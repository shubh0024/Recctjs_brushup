//create the component which change the backgorund color

import React, { useState } from 'react'

function Nine() {
    const [backgroundColor,setbgColor]= useState('yellow');

    const handleclick= () =>{
      const setnewbgColor= backgroundColor === 'yellow' ? 'green':'yellow';
      setbgColor(setnewbgColor);
    }
  
  return (
    <div onClick={handleclick} style={{
      backgroundColor,
      width:'200px',
      height:'200px',
      cursor:'pointer',

    }}>
      Click me to change the background color 
    </div>
  )
}

export default Nine
