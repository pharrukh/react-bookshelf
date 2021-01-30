import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'

const Bookshelves = ({ books, onBookUpdate }) => {
    const shelvesData = [
        ['Currently Reading', 'currentlyReading'],
        ['Want to Read', 'wantToRead'],
        ['Read', 'read']
    ]

    const shelves = shelvesData.map(([title, type]) =>
        (<Shelf key={type} books={books.filter(b => b.shelf === type)} title={title} onBookUpdate={onBookUpdate} />)
    )

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div >
        <div className="list-books-content">
            {shelves}
        </div>
        <div className="open-search">
            <Link to="/search">
                <button>Add a book</button>
            </Link>
        </div>
    </div >)
}

export default Bookshelves;