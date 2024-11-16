import React from 'react'



function Four() {

    const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

  return (
    <div>
      
      {items.map((item,index)=>{
   return <li key={index}>{item}</li>
      })}
    </div>

    )

}

export default Four
