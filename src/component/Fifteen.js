//Build the search bar that filter list of the items based on user input 
import react,{useState} from 'react'

function Fifteen({items}){

    const [searchTerm,setSearchterm] = useState('');

const filteredItems= items.filter((item)=>
  item.toLowerCase().includes(searchTerm.toLowerCase())
)

    return (
        <div>
      <h1>Hello bacho kya ho raha items filter karlo </h1>
      <input 
      type="text" 
      placeholder="search..."
       onChange={(e)=>setSearchterm(e.target.value)}>
      </input>
     <ul>{filteredItems.map((item,index)=>{
         return <li key={index}>
            {item}
            </li>
  
     })}</ul>
        </div>
    )
}

export default Fifteen;