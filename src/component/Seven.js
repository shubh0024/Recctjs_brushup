//build a timer that counts downs from a specified time

import React, { useEffect } from 'react'

function Seven() {

    const [time, setTime] = React.useState(60);

    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=>setTime(time-1),1000);
            return ()=>clearTimeout
        }
    })
  return (
    <div>
      Time left:{time} s
    </div>
  )
}

export default Seven
