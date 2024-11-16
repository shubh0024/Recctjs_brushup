//Create a locatlizaion system using the useContext to provide translations for the entire app 

import { createContext, useContext, useState } from "react";

//Create a context for the localizations

const LocalContext = createContext();

export const useLocalization = ()=>{
    return useContext(LocalContext)
}

export function LocalizationProvider({children}){

const [local,setLocal]=useState('en');


    const localizedString ={
        en:{
            greeting :"Hello World!",
            welcome:"welcome to MY application"
        },
        es:{
          greeting :"��Hola Mundo!",
          welcome:"Bienvenido a mi aplicación"
        }
    };

    const translate = (key) => {
        return localizedString[local][key];
    };



    return(
       <LocalContext.Provider value={{local,setLocal,translate}}>
        {children}
    </LocalContext.Provider>
    )

  
}
