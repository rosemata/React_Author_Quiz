import './App.css';
import './bootstrap.min.css';
import React, { Component } from 'react';


function Hero() {
  return (<div className='row'>
    <div className='jumbotron col-10 offset-1'>
      <h1>Author Quiz</h1>
      <p>Select the book written by the Author shown in the picture</p>
    </div>
  </div>)
}

function Turn({author, books}) {
  return (<div className='row turn' style={{backgroundColor: "lightblue"}}>
    <div className='col-4 offset-1'>
      <img src={author.imageURL} className="authorimage" alt="Author"/>
    </div>

    <div className='col-6'>
      {books.map((title) => <p>{title}</p>)}
    </div>
    
  </div>);
}

function Continue() {
  return (<div>

  </div>)
}

function Footer() {
  return (<div id="footer" className='row'>
    <div className='col-12'>
      <p className='text-muted credit'>
        All images are from <a href="https://www.google.com"></a>
      </p>
    </div>

  </div>);
}

class AuthorQuiz extends Component {
  render() {
  return (
      <div className='container-fluid'>
        <Hero/>
        <Turn/>
        <Continue/>
        <Footer/>
      </div>
      );
  }
}



export default AuthorQuiz;
