//Make a context provider from user can switch between dark and light mode use the different part of the theme for apply the selected theme 
import React from 'react'
import { useTheme } from './ThemeContext';


function Nineteen (){

const {isDarkMode, toggletheme} = useTheme(); //we have to use the array here notobjects because object we cant able to iterate 

  return (
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#FFF', color: isDarkMode ? '#FFF' : '#000' }}>
      <h1>Dark and night " "{`Mode: ${isDarkMode ? 'Dark' : 'Light'}`}</h1>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggletheme}/>
        Dark mode
      </label>
    </div>
  )
}

export default Nineteen
