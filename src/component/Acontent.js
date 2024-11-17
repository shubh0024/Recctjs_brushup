import React, { useEffect } from 'react'

function Acontent() {
    useEffect(()=>{
        document.title='content';
    })
  return (
    <div>
      <h1>Content</h1>
    </div>
  )
}

export default Acontent
