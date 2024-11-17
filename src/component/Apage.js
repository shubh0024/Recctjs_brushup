import React, { useEffect } from 'react'

function Apage() {

    useEffect(()=>{
        document.title='Home';
    })
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Apage
