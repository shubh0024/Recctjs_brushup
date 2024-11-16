//fetch Api from multiple API and disaplay the combined data in your component 

import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchApi() {
const [data1,setData1]=useState([]);
const [data2,setData2]=useState([]);


   const fetchData1=()=> axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>setData1(res.data))
    .catch(err=>console.log(err+'Error'));

   const fetchData2=()=> axios.get('https://jsonplaceholder.typicode.com/posts/2')
    .then(res=>setData2(res.data))
    .catch(err=>console.log(err+'Error'));
   
// console.log(data1);

// console.log(data2);
   
  return (
    <div>
      <h1>Fetching the data from the multiple API</h1>

      <div>
        {data1 ? (
            <div>
            <h1 style={{color:'blue'}}>Title:{data1.title}</h1>
            <p>Body:{data1.body}</p>

            </div>)
        :(
            <p>Loading...1 not completed</p>
        )    
        }
      
    </div>
      
      <div>
        {data2 ? (
            <div>
               <h1 style={{color:'green'}}> Title:{data2.title}</h1>
               <p>Body:{data2.body}</p>
        </div>
        ):(
            <p>Loading...2 not completed</p>
        )}
      </div>

<label>Click here to find the data </label>
    <button onClick={fetchData1} >fetchdata1</button>
    <button onClick={fetchData2} >fetch data2</button>
    </div>
  )
}

export default FetchApi
