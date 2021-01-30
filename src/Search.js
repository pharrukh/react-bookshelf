import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const search = text => BooksAPI.search(text)
const debouncedSearch = AwesomeDebouncePromise(search, 500);

class Search extends Component {
    state = {
        books: [],
        error: false
    }

    componentDidMount = async () => {
        const loadedBooks = await BooksAPI.getAll()
        this.setState({ loadedBooks })
    }


    inputChangedHandler = async (e) => {
        const searchText = e.target.value
        const result = await debouncedSearch(searchText, 1000)
        if (!result) {
            this.setState({ books: [], error: false })
        }
        else if (result.error) {
            this.setState({ books: [], error: true })
        } else {
            const foundBooks = Array.from(result)

            for (const book of foundBooks) {
                const shelfBook = this.state.loadedBooks.find(shelfBook => shelfBook.id === book.id)
                if (shelfBook) {
                    book.shelf = shelfBook.shelf
                } else {
                    book.shelf = 'none'
                }
            }

            this.setState({ books: foundBooks, error: false })
        }
    }

    render() {
        const books = this.state.books.map(b => <li key={b.id}><Book book={b} onBookUpdate={this.props.onBookUpdate} /></li>)
        const errorImage = this.state.error ? <div ><img width="60%" src="warning.png" /> <p>Server was not happy with our request.</p></div> : ''
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
                    {errorImage}
                </ol>
            </div>
        </div>)
    }
}

export default Search;