//implement a responsive navigation menu with a hamburger icon 

import react,{useState} from 'react';
import '../style/Eighteen.css'

function Eighteen(){

const [isToggle,setTogglemenu]=useState(false);


const Togglemenu = ()=>{
    setTogglemenu(!isToggle);
}
    return (
        
        <div>
          <h1>Naviagtion Menu with A hamburger option</h1>

          <button onClick={Togglemenu} className='menu-icon'>=</button>
          <ul className={`menu ${isToggle?'open':''}`}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#service'>service</a></li>
            <li><a href='#help'>Contact</a></li>
       
          </ul>

        </div>
    )
}

export default Eighteen; 