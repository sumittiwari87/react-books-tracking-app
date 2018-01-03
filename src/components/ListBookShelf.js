/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component to show all the book shelf (Currently Reading, want to read, read and none)
 * */

import React, { Component  } from 'react'
import Book from "./Book";
import {Link} from 'react-router-dom'


class ListBookShelf extends React.Component {

    render() {
        const {books,onUpdateShelf} = this.props
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Book books={books.filter((book)=>{return book.shelf==='currentlyReading'})} shelf = 'Currently Reading' onUpdateShelf = {onUpdateShelf}/>
                            <Book books={books.filter((book)=>{return book.shelf==='wantToRead'})} shelf = 'Want to read' onUpdateShelf = {onUpdateShelf}/>
                            <Book books={books.filter((book)=>{return book.shelf==='read'})} shelf = 'Reading' onUpdateShelf = {onUpdateShelf}/>
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



export default ListBookShelf