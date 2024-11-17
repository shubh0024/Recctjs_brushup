//Create a different route pages component using the useEffect to update the document title with the visited page whenever it changes


import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Apage from '../Apage';
import Acontent from '../Acontent';

function Routesystem() {
  return (
    <BrowserRouter>
    <div>
<Routes>
<Route path="/" element={<Apage/>} />
<Route path="/content" element={<Acontent/>} />
</Routes>

</div>
    
    </BrowserRouter>
    
  )
}

export default Routesystem
