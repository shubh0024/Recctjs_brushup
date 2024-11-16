//develop the weather app that fetches and displays weather information based on a users location 

import react,{useState,useEffect} from 'react';


function Fourteen(){

    const [weather,setWeather ]= useState(null);

    useEffect(()=>{
        const apikey='8d0a27a7ea71e9e6b96dffb086de3fc2';

     navigator.geolocation.getCurrentPosition((position) => {
      const latitude= position.coords.latitude;
      const longitude= position.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}
&appid=${apikey}`)

      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error('Error:', error));

     })
    }
,[]);
    
    return (
        <div>
            {weather ? (
              <div>
                <h1>City: {weather.name}</h1>
                <h3>Temperature: {Math.round(weather.main.temp - 273.15)}°C</h3>
                <h3>Weather: {weather.weather[0].description}</h3>
                <p>Condition:{weather.weather[0].description}</p>
               
              </div>

            ):(
                <h1>Loading...</h1>
            )}
           
       
        </div>
    )
}


export default Fourteen;
