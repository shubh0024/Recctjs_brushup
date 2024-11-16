import React, { useState } from 'react'

export default function Two() {
const [count ,setCount] =useState(0);

const handleclick = function (){
    setCount(count + 1);
    if (count >= 10) {
      alert('Count has reached 10!');
    }
}

const handleclick2 = function (){
    setCount(count - 1);
    if (count <= 0) {
      alert('Count has reached 0!');
    }
}

  return (
    <div>
      <button onClick={handleclick} >+</button>
      <span>{count}</span>
      <button onClick={handleclick2}>-</button>
    </div>
  )
}
