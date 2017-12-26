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

    componentDidMount(){
        this.getAllBooks()
    }

  render() {
    return (
        <div className="app">
            <Route path="/search" exact render={() => (
                <SearchBook onSearchBook = {(query)=>{
                    this.searchBooks(query)
                }} books ={this.state.mySearch} />
            )} />
            <Route path="/" exact render={() => (
                <ListBookShelf books ={this.state.myReading} />
            )} />
        </div>
    );
  }
}

export default App;
