import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quote, setQuote] = useState('');
  const [clickPair, setClickPair] = useState(true);

  useEffect(() => {

    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => {
      setQuote(response.data[0])
    })
    
    
  },[clickPair])
  console.log(quote.quote)

  return (
    <div className='App'>
      <div className='App__header'>
        <div className='App-logo'>
         <img src={quote.image} alt={quote.character}/>
        </div>
        <div className='App__card-character'>
          <p>{quote.character}</p>
        </div>
        <div className='App__card-quote'>
          <p>{quote.quote}</p>
        </div>
        <button onClick={() => setClickPair(!clickPair)} className='App-link'>New Quote</button>
      </div>
    </div>
  );
}

export default App;
