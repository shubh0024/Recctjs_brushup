import React from 'react'
import { useLocalization } from './Localization';


function Translation() {

    const {setLocal,local,translate} = useLocalization();
    // console.log(local);

    const handleLocalChange =(local)=>{
        setLocal(local)
    }
  return (
    <div>
    
      <div>
       <h1 style={{color:'blue'}}>Translation from the English to spanish </h1> 
       <h1 style={{color:'Green'}}> {translate('greeting')}</h1>
       <h1 style={{color:'Red'}}>{translate('welcome')}</h1>
        <button onClick={()=>handleLocalChange('en')} >Click English</button>
        <button onClick={()=>handleLocalChange('es')}>Spanish</button>
      </div>
      
    </div>
  )
}

export default Translation
