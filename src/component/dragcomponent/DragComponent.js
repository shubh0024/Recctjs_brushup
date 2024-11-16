//build a draggable component using the useReducer to manage its postion 

import React, { useReducer, useState } from 'react'

const boxrReducer = (state, action) => {
   switch(action.type){
    case 'DRAG_MOVE':{
        return {
           ...state,
           left:action.payload.left,
           top:action.payload.top,
        }

    }
    default: return state
   }
}


function DragComponent() {

    const [boxState,dispatch]=useReducer(boxrReducer,{left:0,top:0});

    const[isDragging,setDragging] = useState(false);
    const[initiaX,setIntialX] = useState(0);
    const[initialY,setIntialY] = useState(0);


  

    const handleMouseDown = (e) => {
        setDragging(true);
        setIntialX(e.clientX - boxState.left);
        setIntialY(e.clientY - boxState.top);
    }

    const handleMouseUp =(e) =>{
       setDragging(false);
    }

    const handleMouseMove = (e) =>{
        console.log(e.clientX-initiaX, e.clientY-initialY) //it access the mouse position
  
        if(isDragging){
            const left=e.clientX - initiaX;
            const top=e.clientY - initialY;
            dispatch({type:'DRAG_MOVE',payload:{left,top}});
        }
       
console.log(isDragging)
    }

  return (
    
    <div
        onMouseDown={handleMouseDown}
        onMouseup={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{left:boxState.left,top:boxState.top,position:'relative',color:'red'}}
        >
        Drag me touch me whatever i will go where you want to take the mouse
    </div>
  )
}

export default DragComponent
