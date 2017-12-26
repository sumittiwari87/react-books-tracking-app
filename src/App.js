import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBook from "./SearchBook"
import * as BooksAPI from "./BooksAPI"
import {Route} from 'react-router-dom'


class App extends Component {

    state = {
        books :[]
    }

    getAllBooks =()=>{
      BooksAPI.getAll().then((results)=>{
            this.setState({books:results})
      })
    }

    searchBooks = (query)=>{
      BooksAPI.search(query).then((results)=>{
          this.setState((state)=>({
              books:state.books.filter((c)=>c.id!==results.id)
          }))
      })
    }

    componentDidMount(){
        this.getAllBooks()
    }

  render() {
    return (
        <div className="app">
          {/*<Route exact path ="/" render = {()=>(
              <SearchBook/>
          )}/>
          <Route path ="/search" render={()=>(
              <SearchBook
              />
          )}/>*/}
          <SearchBook
              onSearchBook = {(query)=>{
                  this.searchBooks(query)
              }}
              books ={this.state.books}
          />
        </div>

    );
  }
}

export default App;
