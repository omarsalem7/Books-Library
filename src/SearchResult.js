import React from "react";
import Book from "./Book";
const SearchResult = ({ books, onMove, myBooks }) => {
  const updatedBooks = books.map((book) => {
    myBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            onMove={onMove}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
          />
        ))}
      </ol>
    </div>
  );
};
export default SearchResult;
