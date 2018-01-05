/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component to show all the book shelf (Currently Reading, want to read, read and none)
 * */

import React from 'react'
import Shelf from "./Shelf";
import {Link} from 'react-router-dom'


class Home extends React.Component {
    render() {
        const {books, updateShelf} = this.props
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf books={books.filter((book) => {
                                return book.shelf === 'currentlyReading'
                            })} shelf='Currently Reading' updateShelf={updateShelf}/>
                            <Shelf books={books.filter((book) => {
                                return book.shelf === 'wantToRead'
                            })} shelf='Want to read' updateShelf={updateShelf}/>
                            <Shelf books={books.filter((book) => {
                                return book.shelf === 'read'
                            })} shelf='Reading' updateShelf={updateShelf}/>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search"> Add a book</Link>
                </div>
            </div>


        )
    }
}


export default Home