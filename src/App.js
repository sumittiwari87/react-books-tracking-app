import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBook from "./components/SearchBook"
import * as BooksAPI from "./BooksAPI"
import {Route} from 'react-router-dom'
import ListBookShelf from "./components/ListBookShelf";


class App extends Component {

    state = {
        myReading :[],
        mySearch:[]
    }

    getAllBooks =()=>{
      BooksAPI.getAll().then((results)=>{
            this.setState({myReading:results})
      })
    }

    emptySerach=()=>{
        this.setState({mySearch:[]})
    }

    searchBooks = (query)=>{
        if(query){
            BooksAPI.search(query).then((results)=>{
                if(Array.isArray(results)){
                    this.setState({mySearch:results})
                }else{
                    this.emptySerach()
                }
            })
        }else{
            this.emptySerach()
        }
    }

    updateShelf = (book,shelf)=>{
        console.log("Book is "+book.shelf+" and shelf is "+shelf)
        if (shelf === 'none') {
            this.setState(prevState => ({
                myReading: prevState.myReading.filter(b => b.id !== book.id),
            }))
        }else if(book.shelf!==shelf){
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
                if(myReadsIds.includes(book.id)){
                    myReadingNew = myReading.map(bookStored => {
                        if (book.id === bookStored.id) {
                            bookStored.shelf = shelf
                        }
                        return bookStored
                    })
                    this.setState({myReading:myReadingNew});
                }else{
                    book.shelf = shelf
                    myReadingNew = [...myReading, book]
                    mySeacrhNew = mySearch.filter(b=> {
                        return b.id != book.id
                    });
                    this.setState({myReading: this.state.myReading.concat(book),mySearch:mySeacrhNew});
                }
            })
        }
    }

    componentDidMount(){
        this.getAllBooks()
    }

  render() {
    return (
        <div className="app">
            <Route path="/search" exact render={() => (
                <SearchBook onSearchBook = {(query)=>{
                    this.searchBooks(query)
                }}
                books ={this.state.mySearch}
                    updateShelf = {(book,shelf)=>{
                    this.updateShelf(book,shelf)
                }}/>
            )} />
            <Route path="/" exact render={() => (
                <ListBookShelf books ={this.state.myReading}
                               updateShelf = {(book,shelf)=>{
                                   this.updateShelf(book,shelf)
                               }}
                />
            )} />
        </div>
    );
  }
}

export default App;
