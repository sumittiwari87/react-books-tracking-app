/**
 * @ Author - Sumit
 * @ Dated - 10 December 2017
 * @ It is a react component to list all the new books and search using name and add to book shelf
 * */

import React, { Component  } from 'react'
import escapeRedExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Shelf from "./Shelf";
import {Link} from 'react-router-dom'
import DebounceInput from 'react-debounce-input'

class SearchBook extends React.Component{

    state ={
        query:''
    }

    onSearchBook =(query)=>{
        this.setState({query:query.trim()})
        this.props.onSearchBook(query)
    }
    render(){

        const {books,updateShelf,emptySearch} = this.props
        const {query} = this.state

        let showingBooks = []

        if(query){
            showingBooks =  books
        }else{
            showingBooks =  []
            emptySearch
        }

        if(showingBooks.length){
            showingBooks.sort(sortBy('title'))
        }

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        {/*<input placeholder="Search by title or author"
                               type="text"
                               onChange=
                        />*/}
                        <DebounceInput
                            debounceTimeout={325}
                            element="input"
                            type="text"
                            value={this.state.query}
                            onChange={(event)=> this.onSearchBook(event.target.value.trim())}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <Shelf
                books={showingBooks}
                updateShelf = {updateShelf}
                shelf = 'Search Results'
                />


            </div>
        )}
}

export default SearchBook