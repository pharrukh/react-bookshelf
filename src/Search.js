import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const search = text => BooksAPI.search(text)
const debouncedSearch = AwesomeDebouncePromise(search, 500);

class Search extends Component {
    state = {
        books: []
    }

    inputChangedHandler = async (e) => {
        const searchText = e.target.value
        const result = await debouncedSearch(searchText, 1000)
        if (!result || result.error) {
            this.setState({ books: [] })
        } else {
            this.setState({ books: Array.from(result) })
        }
    }

    render() {
        const books = this.state.books.map(b => <li key={b.id}><Book book={b} /></li>)

        return (<div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.inputChangedHandler} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books}
                </ol>
            </div>
        </div>)
    }
}

export default Search;