import Book from './Book'

const Shelf = ({ books, title, onBookUpdate }) => {

    const bookElements = books.map(b => (<li key={b.id}><Book book={b} onBookUpdate={onBookUpdate} /></li>))

    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {bookElements}
            </ol>
        </div>
    </div>)
}

export default Shelf;