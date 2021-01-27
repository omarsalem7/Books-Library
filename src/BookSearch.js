import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
class BookSearch extends Component {
  render() {
    const { books, onMove, onSearch, onResetSearch, myBooks } = this.props;
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResult onMove={onMove} myBooks={myBooks} books={books} />
      </div>
    );
  }
}
export default BookSearch;
