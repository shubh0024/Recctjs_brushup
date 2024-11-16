import React,{useEffect,useState} from 'react'

function Fetch_api() {

    const [data,setdata]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=>res.json())
       
        .then((json)=>setdata(json))
       
        .catch(err=>console.error(err))
      //updating the state with the fetched data
      
      
    },[])
   
  return (
    <div>
        {data ? (<div>
            <h1>Title:{data.title}</h1>
            <h1>Body:{data.id}</h1>

            </div>)
        :(
            <p>Loading...</p>
        )    
        }
      
    </div>
  )
}

export default Fetch_api
