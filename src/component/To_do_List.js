//make the Todo list using the useReducer function 

import React, { useReducer, useState } from 'react'

const taskReducer = (state,action) => {
  switch(action.type){
    case 'ADD_TASK':
      // return [...state, action.payload];
      return [...state, {id:Date.now(),text:action.payload,completed:false}];

    case 'DELETE_TASK':
      return state.filter((task)=> task.id !== action.payload);

    case 'TOGGLE_TASK':
        return state.map((task)=> task.id === action.payload ? {...task,completed:!task.completed} :task);
    default:
      return state;
  }

}

function To_do_List() {
    
    const [tasks,dispatch] = useReducer(taskReducer,[]);

    const [taskstext,settastext]= useState('');

  const addTask = () => {
    
    dispatch({type: 'ADD_TASK', payload: taskstext});
  }

//   const deleteTask = (index) => {
//     dispatch({type: 'DELETE_TASK', payload:index.id});
//   }
  
  return (
    <div>
      <h1>To_do_List using UseReducer</h1>

      <input type="text" value={taskstext} onChange={(e)=>settastext(e.target.value)} placeholder='Add new Task'/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task)=>(
           <li key={task.id}>
            <span 
            style={{textDecoration:task.completed ? 'line-through' : 'none'}}
            onClick={()=>dispatch({type:'TOGGLE_TASK',payload:task.id})}
            >
                {task.text}
                <button 
                onClick={()=>dispatch({type:'DELETE_TASK',payload:task.id})}>Delete</button>
 
            </span>
           </li> 
        ))}
      </ul>
    </div>
  )
}

export default To_do_List;
