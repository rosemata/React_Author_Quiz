import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthorQuiz from './AuthorQuiz';

const authors = [{
  name: 'Letter Apple',
  imageUrl: 'images/authors/a.jpeg',
  imageSource: 'Wikimedia Commons',
  books: ['The Adventures of Huckleberry Finn']
}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthorQuiz />
  </React.StrictMode>
);