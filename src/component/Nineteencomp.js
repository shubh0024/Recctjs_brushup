import React from 'react'
import { useTheme } from './ThemeContext';
import '../style/Nineteen.css'

function Nineteencomp() {
    const {isDarkMode} = useTheme();
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${themeClass}`}>
        <p>This is component uses selected theme</p>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate, voluptas, quam odio animi eligendi tempora libero nam, quia natus dolorum possimus accusamus laboriosam! Veniam ut laborum officia a quis.</p>
    </div>
  )
}

export default Nineteencomp;
