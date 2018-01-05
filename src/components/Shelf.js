/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component for the book and its state
 * */

import React from 'react'
import Book from "./Book";


class Shelf extends React.Component {

    render() {
        const {books,updateShelf} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateShelf={updateShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Shelf
