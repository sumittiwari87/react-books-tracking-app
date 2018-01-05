import React, {Component} from 'react'
import './App.css'
import SearchBook from "./components/SearchBook"
import * as BooksAPI from "./BooksAPI"
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

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
        const {myReading} = this.state;
        const myReadsIds = myReading.map(b => b.id)
        let updatedSearch = []
        updatedSearch = results.map(result => {
            let search = result
            if (myReadsIds.includes(result.id)) {

                //update the shelf
                /*result.shelf = myReading.filter(obj=> {
                    return obj.id == result.id;
                })[0].shelf*/
                search.shelf = myReading.filter(obj => {
                    return obj.id === result.id;
                })[0].shelf
            }
            return search
        })

        return updatedSearch
    }

    searchBooks = (query) => {
        this.emptySearch()
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
        if (shelf === 'none') {
            BooksAPI.update(book, shelf).then(() => {
                this.setState(prevState => ({
                    myReading: prevState.myReading.filter(b => b.id !== book.id),
                }))
            })
        } else if (book.shelf !== shelf) {
            //call the service to update the shelf
            BooksAPI.update(book, shelf).then(() => {
                const {myReading} = this.state;
                const myReadsIds = myReading.map(b => b.id)
                /* The main important thing to care
                ** 1. If the book is on the shelf, reshelf the book i.e re postion the book
                ** 2. if the book is not on the shelf and you are adding after searching it, then you need to add this book into the myRead state
                */
                let myReadingNew = []
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
                    this.setState({myReading: myReadingNew});
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
                <Switch>
                    <Route path="/search" exact render={() => (
                        <SearchBook onSearchBook={(query) => {
                            this.searchBooks(query)
                        }}
                                    books={this.state.mySearch}
                                    updateShelf={(book, shelf) => {
                                        this.updateShelf(book, shelf)
                                    }}
                                    emptySearch={this.emptySearch}
                        />
                    )}/>
                    <Route path="/" exact render={() => (
                        <Home books={this.state.myReading}
                              updateShelf={(book, shelf) => {
                                  this.updateShelf(book, shelf)
                              }}
                              emptySearch={this.emptySearch}

                        />
                    )}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default App;
