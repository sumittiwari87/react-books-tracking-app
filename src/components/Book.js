/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component for the book and its state
 * */

import React from 'react'


class Book extends React.Component {

    render() {
        const {book, updateShelf} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail ? `${book.imageLinks.smallThumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf || "none"}
                                onChange={(event) => updateShelf(book, event.target.value.trim())}>
                            <option value="moveTo" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{Array.isArray(book.authors) ? book.authors.join(', ') : ''}</div>
            </div>

        )
    }
}


export default Book
