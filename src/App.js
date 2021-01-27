import React, { Component } from 'react';
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

  handleBookUpdate = (book) => {
    let books = [...this.state.books];
    if (!this.state.books.find(b => b.id === book.id)) {
      books.push(book)
    } else {
      const index = this.state.books.findIndex(b => b.id === book.id)
      books[index] = book;
    }
    this.setState({ books });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path='/search' render={() => <Search onBookUpdate={this.handleBookUpdate} />} />
          <Route exact path='/' render={() => <Bookshelves books={this.state.books} onBookUpdate={this.handleBookUpdate} />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
