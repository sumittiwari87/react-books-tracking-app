/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component for the book and its state
 * */

import React, { Component  } from 'react'


class Book extends React.Component {

    render() {

        const {books,onUpdateShelf} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                        }}>
                                        </div>
                                        <div className="book-shelf-changer">
                                            <select value = {book.shelf} onChange= {(event)=> onUpdateShelf(book,event.target.value.trim())}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{Array.isArray(book.authors)?book.authors.join(', '):''}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Book
