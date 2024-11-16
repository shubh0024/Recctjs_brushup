import React,{useState} from 'react'

function Todo_list() {
    const [input ,setinput] = useState('');
        const [todos,setTodos]= useState([]);

        const addTodo =()=>{
            if(input!=''){
                setTodos([...todos,input]);
                setinput('');
            }
        }

        const removeTodo =()=>{
            setTodos(todos.filter((todo,index)=>index!==index));
        //const updatetodo =()=>todos.filter((_,i)=>i!==index);
        //setodos(updatetodo.filter);
        }
    
  return (
    <div>
      <input type='text' onChange={(e)=>setinput(e.target.value)}></input>
      <button onClick={addTodo} >Add</button>
  <ul>
    {todos.map((todo,index)=>{
       return  <li key={index} >
                {todo} <button onClick={removeTodo} >Remove</button>

            </li>
    })}
    
  </ul>

    </div>
  )
}

export default Todo_list
