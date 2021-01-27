import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'

const Bookshelves = ({ books }) => (<div className="list-books">
    <div className="list-books-title">
        <h1>MyReads</h1>
    </div >
    <div className="list-books-content">
        <Shelf books={books.filter(b => b.shelf === 'currentlyReading')} />
        <Shelf books={books.filter(b => b.shelf === 'wantToRead')} />
        <Shelf books={books.filter(b => b.shelf === 'read')} />
    </div>
    <div className="open-search">
        <Link to="/search">
            <button>Add a book</button>
        </Link>
    </div>
</div >)

export default Bookshelves;