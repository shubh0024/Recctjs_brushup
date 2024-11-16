import React, { createContext ,useState,useContext} from "react";

const ThemeContext=createContext();

function ThemeProvider({children}){
    const [isDarkMode,setIsDarkMode]=useState(false);

    const toggletheme= () =>{ //theme toggle
      return  setIsDarkMode((prevMode)=> !prevMode)
    };

    return(
        <ThemeContext.Provider value={{isDarkMode,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme(){
      return useContext(ThemeContext);
}


export { ThemeContext, ThemeProvider, useTheme };