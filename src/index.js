import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthorQuiz from './AuthorQuiz';

const authors = [{
  name: 'Letter Apple',
  imageURL: 'images/authors/a.jpeg',
  imageSource: 'Wikimedia Commons',
  books: [
    'The Adventures of Huckleberry Finn',
    'Life on the Mississippi',
    'Roughing it']
}];

const state = {
    turnData: {
    author: authors[0],
    books: authors[0].books
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AuthorQuiz {...state}/>
);