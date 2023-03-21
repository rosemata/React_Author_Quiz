import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import {shuffle, sample} from 'underscore'

const authors = [{
  name: 'First Author',
  imageURL: 'images/authors/a.jpeg',
  imageSource: 'Wikimedia Commons',
  books: [
    'The Adventures of Huckleberry Finn',
    'Life on the Mississippi',
    'Roughing it']
  },
  {
    name: 'Second Author',
    imageURL: 'images/authors/b.jpeg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Second The Adventures of Huckleberry Finn',
      'Second Life on the Mississippi',
      'Second Roughing it']
  },
  {
    name: 'Third Author',
    imageURL: 'images/authors/c.png',
    imageSource: 'Wikimedia Commons',
    books: [
      'Third The Adventures of Huckleberry Finn',
      'Third Life on the Mississippi',
      'Third Roughing it']
  },
  {
    name: 'Fourth Author',
    imageURL: 'images/authors/d.png',
    imageSource: 'Wikimedia Commons',
    books: [
      'Fourth The Adventures of Huckleberry Finn',
      'Fourth Life on the Mississippi',
      'Fourth Roughing it']
  },
  {
    name: 'Fifth Author',
    imageURL: 'images/authors/e.jpeg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Fifth The Adventures of Huckleberry Finn',
      'Fifth Life on the Mississippi',
      'Fifth Roughing it']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p,c,i){
    return p.concat(c.books);
  }, []);

  // shuffle in random order
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
    author.books.some((title) =>
    title === answer))
  }
}
const state = {
    turnData: getTurnData(authors)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AuthorQuiz {...state}/>
);