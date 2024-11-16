//Create the component that displays a random quote each time it is rendered 

import React from 'react'

function Eleven() {
    let quotes = [
        "Avoid daydreaming about the your year to come together","you are the most important person in the world of whole life ","Always be true to who you are and ignore what people have to say about yourself","you are the most important person in the world of whole life","Only demonstrate your strength when its really neede","Subscribe to Drop X out"
    ];

    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomQuote];



  return (
    <div>
    <h1 style={{
        color: 'red',
        fontSize: '30px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'  // shadow effect for text
    }}> Hello bacho aja quote sunao : {quote}</h1>
    </div>
  )
}

export default Eleven
