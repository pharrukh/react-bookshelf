import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelves from './Bookshelves'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path='/search' component={Search} />
          <Route exact path='/' component={Bookshelves} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
