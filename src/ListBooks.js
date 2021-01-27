import BookCase from "./BookCase";
import React, { Component } from "react";
import OpenSearchBtn from "./OpenSearchBtn";
class ListBooks extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookCase bookshelves={bookshelves} onMove={onMove} books={books} />
        <OpenSearchBtn />
      </div>
    );
  }
}
export default ListBooks;
