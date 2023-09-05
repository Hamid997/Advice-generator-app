import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.adviceslip.com/advice';

function QuoteCard() {
  const [quote, setQuote] = useState(null);

  const getQuotes = () => {
    axios.get(url)
      .then((response) => {
        setQuote(response.data.slip); // Use response.data to access the data
      })
      .catch((error) => {
        // Handle the error in console log
        console.error(error);
        // default message or advice
        setQuote({ id: 0, advice: 'An error occurred while fetching advice.' });
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => getQuotes();

  return (
    <>
      <div className='cardContainer'>
        {quote && (
          <>
            <h1 className='heading'>Advice #{quote.id} </h1>
            <p className='quote'>
              <q>{quote.advice}</q>
            </p>
          </>
        )}
        <div className='divider'></div>
        <button className='button' onClick={handleClick}>
          <img src="/icon-dice.svg" alt="icon dice" />
        </button>
      </div>
    </>
  );
}

export default QuoteCard;
