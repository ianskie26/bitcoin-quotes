import React from 'react';
import './App.css';
import quoteData from './quoteData';
import Footer from './Footer';

function App() {

  const [quotes, setQuotes] = React.useState({})

  function getQuote() {
    const quotesArray = quoteData
    const randomNum = Math.floor(Math.random() * quotesArray.length)
    const quote = quotesArray[randomNum]
    setQuotes(quote)
  }

  return (
    <>
    <div className="App" onLoad={getQuote}>
    <blockquote>
      <img src={require('./images/bitcoin.png')} alt="bitcoin" onClick={getQuote}/>
      <h1>{quotes.Body}</h1>
      <h2>- {quotes.Author}</h2>
    </blockquote>
    </div>
    <Footer />
    </>
    
  )
}

export default App;
