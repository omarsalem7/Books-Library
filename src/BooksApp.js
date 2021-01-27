
import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./BooksApp.css";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import ListBooks from "./ListBooks";
import { debounce } from "throttle-debounce";

class BooksApp extends Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];
  state = {
    books: [],
    searchBooks: [],
  };
  searchForBooks = debounce(300, false, (query) => {
    console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        console.log(books);
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };
  onMove = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let updatedBooks = [];
    updatedBooks = this.state.books.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  };
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
      console.log(books);
    });
  };
  render() {
    const { books, searchBooks } = this.state;

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={searchBooks}
              onMove={this.onMove}
              onSearch={this.searchForBooks}
              onResetSearch={this.resetSearch}
              myBooks={books}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              onMove={this.onMove}
              books={books}
            />
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
