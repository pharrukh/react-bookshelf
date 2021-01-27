import ShelfChanger from './ShelfChanger'

const Book = ({ book }) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book?.imageLinks?.thumbnail || ''}")` }}></div>
            <ShelfChanger shelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>
)

export default Book;