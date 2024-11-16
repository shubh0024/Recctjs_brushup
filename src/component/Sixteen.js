//Deveelop a pagination component to navigate through a large list of items .
import { useState } from "react";
function Sixteen({items,itemsPerPage}){


   const [currentPage,setCurrentPage]= useState(1);
   const indexoflastitem= currentPage * itemsPerPage;
   
   const indexoFfirstItem = indexoflastitem - itemsPerPage;

   const currentItems=items.slice(indexoFfirstItem,
    indexoflastitem);

 console.log(currentItems);

 const pageNo= [];

 for(let i=0; i<Math.ceil(items.length)/itemsPerPage; i++){
    pageNo.push(i);
 }

    return (
        <div>
            <h2>Pagination Component</h2>

            <ul>
                {currentItems.map((item,index)=>{
                    return <li key={index}>
                        {item}
                    </li>
                })}
                {pageNo.map((index)=>{
                    return <button onClick={()=>setCurrentPage(index+1)}>
                        {index+1}
                    </button>
                })}
            </ul>
            
        </div>
    )
}

export default Sixteen ;