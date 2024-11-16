import './App.css';
import Eleven from './component/Eleven';
import Fetch_api from './component/Fetch_api';
import Five from './component/Five';
import Four from './component/Four';
import Nine from './component/Nine';
import One from './component/One';
import Seven from './component/Seven';
import Ten from './component/Ten';


import Three from './component/Three';
import Todo_list from './component/Todo_list';
import Two from './component/Two';

import Twelve from './component/Twelve';
import Thirteen from './component/Thirteen';
import Fourteen from './component/Fourteen';
import Fifteen from './component/Fifteen';
import Sixteen from './component/Sixteen';
import Seventeen from './component/Seventeen';
import Eighteen from './component/Eighteen';
import Nineteen from './component/Nineteen';
import Nineteencomp from './component/Nineteencomp';
import { ThemeProvider } from './component/ThemeContext';
import Cart from './component/Cart';
import { CartProvider } from './component/CartContext';
import Counter from './component/Counter';
import To_do_List from './component/To_do_List';
import Page from './component/pages/Page';
import LoginAuth from './component/loginauth/LoginAuth';
import { Authprovider } from './component/loginauth/AuthContext';
import DragComponent from './component/dragcomponent/DragComponent';
import Translation from './component/LocaliZation/Translation';
import { LocalizationProvider } from './component/LocaliZation/Localization';
import FetchApi from './component/fetchApi/FetchApi';
import FetchAllData from './component/fetchApi/FetchAlldata';


function App() {
    const items =['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
    
  return (
    <div className="App">
      {/* <One/> */}
      <h1  style={{color:'darkred'}} className='helo'>React Brush ups the logic</h1>
      {/* <Two/> */}

      {/* <Three/> */}
      {/* <Four/> */}
      {/* <Five/> */}

      {/* <Fetch_api/> */}

      {/* <Seven/> */}
      {/* <Todo_list/> */}

      {/* <Nine/> */}
     
      {/* <Ten/> */}
  

  {/* <Eleven/> */}

{/* <Twelve/> */}

{/* <Thirteen/> */}

{/* <Fourteen/> */}

{/* <Fifteen items={items}/> */}

{/* <Sixteen items={items} itemsPerPage={2}/> */}

{/* <Seventeen/> */}

{/* <Eighteen/> */}

{/* <ThemeProvider>
  <div className='App'>

  <Nineteen/>
  <Nineteencomp/>
  </div>

</ThemeProvider> */}

{/* <CartProvider>
<Cart/>
  
</CartProvider> */}


{/* <Counter/> */}

{/* <To_do_List/> */}

{/* <Page/> */}

{/* <Authprovider>

<LoginAuth/>
</Authprovider> */}

{/* <DragComponent/> */}
{/* <LocalizationProvider>

<Translation/>

</LocalizationProvider> */}

{/* <FetchApi/> */}
<FetchAllData/>



    </div>
  );
}

export default App;
