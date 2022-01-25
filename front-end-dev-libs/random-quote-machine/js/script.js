"use strict";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


//updating the quote and author inside the quote-box using new-quote

//allowing user to tweet out the current quote

//on page load, load a quote and an author

//Redux
// const quoteReducer = (state, action) => {

// }
// const updateQuoteAction = () => {

// }

//const store=Redux.createStore(quoteReducer);

//React

class Quote extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      randIndex: Math.floor(Math.random() * 2),
      quote: "",
      author: ""
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  
  changeQuote() {
    this.setState({
      randIndex: Math.floor(Math.random() * 2)
    });
  }
  render() {
    const quotes = [["Believe it!", "Naruto"],["My Nindo, My Ninja Way","Naruto"]];
    let text = quotes[this.state.randIndex][0];
    let author = quotes[this.state.randIndex][1];
    let append= "twitter.com/intent/tweet?text=";
    return (
      <div>
        <blockquote>
        <p id="text">{text}</p>
        <p id="author">{author}</p>
        </blockquote>
        <button id="new-quote" class="btn btn-primary" onClick={this.changeQuote}>
          New Quote
        </button>
        <button id="tweet-quote" class="btn btn-primary">
         <a id="tweet-quote" href={append+text+author}><i class="fab fa-twitter"></i></a>
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Quote />, document.getElementById("quote-box"));
