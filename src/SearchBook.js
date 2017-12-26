/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component to list all the new books and search using name and add to book shelf
 * */

import React, { Component  } from 'react'
import escapeRedExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from "./Book";

class SearchBook extends React.Component{

    state ={
        query:''
    }

    render(){

        const {books, onSearchBook} = this.props
        const {query} = this.state

        let showingBooks

        if(query){
            const match = new RegExp(escapeRedExp(this.state.query),'i')
            showingBooks = books.filter((book)=>match.test(book.name))
        }else{
            showingBooks =  books
        }
        showingBooks.sort(sortBy('title'))

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => {}}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                           <li key={book.id}>
                               <Book
                                    book ={book}
                               />
                           </li>
                        ))}

                    </ol>
                </div>
            </div>
        )}
}

export default SearchBook