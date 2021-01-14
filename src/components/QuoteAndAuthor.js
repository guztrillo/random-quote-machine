import React, {Fragment} from 'react';

export default function QuoteAndAuthor (props) {
     const {quote, generateRandomQuote, color} = props;
     return (
          <Fragment>
               <div id="fades">
                    <div id="text">
                         <i className="fas fa-quote-left randomTxtColor icon"></i>
                         <p id="quoteText" className="randomTxtColor">{quote.quote}</p>
                         <i className="fas fa-quote-right randomTxtColor icon"></i>
                    </div>
                    <div id="author">
                         <span id="quoteAuthor" className="randomTxtColor">{quote.author === null ? '- Unknown' : '- ' + quote.author}</span>
                    </div>
               </div>
               <div id="buttons">
                    <a id="tweet-quote" className="twitter-share-button" href="https://wwww.twitter.com/intent/tweet" target="_blank" rel="noreferrer" onClick={() => {
                         generateRandomQuote(quote);
                         window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent('"' + quote.quote + '"' + '--' + quote.author))
                    }}>
                         <i className="fab fa-twitter randomTxtColor"></i>
                    </a>
                    <button id="new-quote" className="randomBgColor" onClick={()=> {
                         generateRandomQuote(quote);
                         color();
                    }}>New Quote</button>
               </div>
          </Fragment>
     )
}