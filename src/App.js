import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelves from './Bookshelves'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount = async () => {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path='/search' component={Search} />
          <Route exact path='/' render={() => <Bookshelves books={this.state.books} />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
