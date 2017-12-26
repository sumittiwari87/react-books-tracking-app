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

        let showingBooks = []

        if(query){
            const match = new RegExp(escapeRedExp(this.state.query),'i')
            showingBooks = books.filter((book)=>match.test(book.name))
        }else{
            showingBooks =  books
        }

        if(showingBooks.length){
            showingBooks.sort(sortBy('title'))
        }

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
                        <input placeholder="Search by title or author"
                               type="text"
                               onChange={(event)=> onSearchBook(event.target.value.trim())}
                        />

                    </div>
                </div>
                <Book
                    books={showingBooks}
                    shelf = 'Search Results'
                />
            </div>
        )}
}

export default SearchBook