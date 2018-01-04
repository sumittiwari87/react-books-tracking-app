import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBook from "./components/SearchBook"
import * as BooksAPI from "./BooksAPI"
import {Route} from 'react-router-dom'
import ListBookShelf from "./components/ListBookShelf";


class App extends Component {

    state = {
        myReading: [],
        mySearch: []
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((results) => {
            this.setState({myReading: results})
        })
    }

    emptySearch = () => {
        this.setState({mySearch: []})
    }

    validateShelf = (results) => {
        const {myReading, mySearch} = this.state;
        const myReadsIds = myReading.map(b => b.id)
        let updatedSearch = []
        updatedSearch = results.map(result => {
            let search = result
            if (myReadsIds.includes(result.id)) {

                //update the shelf
                /*result.shelf = myReading.filter(obj=> {
                    return obj.id == result.id;
                })[0].shelf*/
                search.shelf = myReading.filter(obj=> {
                    return obj.id == result.id;
                })[0].shelf
            }
            return search
        })

        return updatedSearch
    }

    searchBooks = (query) => {

        if (query) {
            BooksAPI.search(query).then((results) => {
                let searchedBooks = []
                if (Array.isArray(results)) {
                    searchedBooks = results.length > 0 ? this.validateShelf(results) : results
                    this.setState({mySearch: searchedBooks})
                } else {
                    this.emptySearch()
                }
            })
        } else {
            this.emptySearch()
        }
    }

    updateShelf = (book, shelf) => {
        console.log("Book is " + book.shelf + " and shelf is " + shelf)
        if (shelf === 'none') {
            this.setState(prevState => ({
                myReading: prevState.myReading.filter(b => b.id !== book.id),
            }))
        } else if (book.shelf !== shelf) {
            //call the service to update the shelf
            BooksAPI.update(book, shelf).then(() => {
                const {myReading, mySearch} = this.state;
                const myReadsIds = myReading.map(b => b.id)
                const searchedBooksIds = mySearch.map(b => b.id)
                /* The main important thing to care
                ** 1. If the book is on the shelf, reshelf the book i.e re postion the book
                ** 2. if the book is not on the shelf and you are adding after searching it, then you need to add this book into the myRead state
                */
                let myReadingNew = []
                let mySeacrhNew = []
                if (myReadsIds.includes(book.id)) {
                    myReadingNew = myReading.map(bookStored => {
                        if (book.id === bookStored.id) {
                            bookStored.shelf = shelf
                        }
                        return bookStored
                    })
                    this.setState({myReading: myReadingNew});
                } else {
                    book.shelf = shelf
                    myReadingNew = [...myReading, book]
                    mySeacrhNew = mySearch.filter(b => {
                        return b.id != book.id
                    });
                    this.setState({myReading: this.state.myReading.concat(book), mySearch: mySeacrhNew});
                }
            })
        }
    }

    componentDidMount() {
        this.getAllBooks()
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" exact render={() => (
                    <SearchBook onSearchBook={(query) => {
                        this.searchBooks(query)
                    }}
                                books={this.state.mySearch}
                                updateShelf={(book, shelf) => {
                                    this.updateShelf(book, shelf)
                                }}/>
                )}/>
                <Route path="/" exact render={() => (
                    <ListBookShelf books={this.state.myReading}
                                   updateShelf={(book, shelf) => {
                                       this.updateShelf(book, shelf)
                                   }}
                                   emptySearch = {this.emptySearch}
                    />
                )}/>
            </div>
        );
    }
}

export default App;
