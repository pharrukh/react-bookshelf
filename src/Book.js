import ShelfChanger from './ShelfChanger'
import { Component } from 'react'
import * as BooksAPI from './BooksAPI'
class Book extends Component {
    state = {}

    constructor({ book }) {
        super()
        this.state.book = book
    }

    handleShelfChange = async (e) => {
        const shelf = e.target.value
        await BooksAPI.update(this.state.book, shelf)
        this.state.book.shelf = shelf
        this.setState({ book: this.state.book })
        this.props.onBookUpdate(this.state.book)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.state.book?.imageLinks?.thumbnail || 'no-image.jpg'}")` }}></div>
                    <ShelfChanger shelf={this.state.book.shelf} onShelfChangeHandler={this.handleShelfChange} />
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.authors}</div>
            </div>
        )
    }
}

export default Book;