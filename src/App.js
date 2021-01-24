import React, { Component, Fragment } from 'react';
import './App.css';
import QuoteAndAuthor from './components/QuoteAndAuthor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
      data: {}
    }
    this.generateRandomQuote = this.generateRandomQuote.bind(this);
  }
  componentDidMount() {
    this.createRGB();
    this.fades();
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => this.setState({ quote: data[Math.floor(Math.random() * 1643)].text, author: data[Math.floor(Math.random() * 1643)].author, data }));
  }
  generateRandomQuote(state) {
    this.fades();
    let index = Math.floor(Math.random() * 1643)
    let newQuote = state.data[index]
    this.setState({
      quote: newQuote.text,
      author: newQuote.author
    })
  }
  createRGB() {
    let bgColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    const bg = document.querySelectorAll('.randomBgColor');
    for (let bgs of bg) {
      bgs.setAttribute('style', `background-color: ${bgColor}`)
    }
    const text = document.querySelectorAll('.randomTxtColor');
    for (let texts of text) {
      texts.setAttribute('style', `color: ${bgColor}`)
    }
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = "background-color 1s ease"
  }
  fades() {
    var opacity = 0;
    var intervalID = 0;
    var text = document.getElementById("quoteText");
    var quoteRight = document.querySelector('.fa-quote-right');
    var quoteLeft = document.querySelector('.fa-quote-left');
    var author = document.getElementById("quoteAuthor");
    window.onload = fadeIn;

    function fadeIn() {
      setInterval(show, 50);
    }

    function show() {
      setOpacity(text)
      setOpacity(author)
      setOpacity(quoteRight)
      setOpacity(quoteLeft)
      function setOpacity(elem) {
        opacity = Number(window.getComputedStyle(elem)
          .getPropertyValue("opacity"));
        if (opacity < 1) {
          opacity = opacity + 0.075;
          elem.style.opacity = opacity
        } else {
          clearInterval(intervalID);
        }
      }
    }
  }

  render() {
    return (
      <Fragment>
        <div id="title">
          <h1>Random Quote</h1>
        </div>
        <div className="container-fluid randomBgColor">
          <div id="quote-box">
            <QuoteAndAuthor generateRandomQuote={this.generateRandomQuote} quote={this.state} color={this.createRGB} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
