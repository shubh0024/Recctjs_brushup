//Build a color picker that allows users to select a color


import React, { useState } from 'react';

function Seventeen(){

    const [color, setColor] = useState('');

    const handleClick =(e)=>{
  setColor(e.target.value);
    }
    return (
        <div>
           <h1>Allow user to select a color</h1>

           <input type='text' placeholder='Select a color' onChange={handleClick}  />
           <div style={{width:'100px',height:'100px',backgroundColor:color}}/>
           </div>

    )
}

export default Seventeen;