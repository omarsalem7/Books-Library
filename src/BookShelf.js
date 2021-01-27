import Book from "./Book";
import React from "react";
const BookShelf = ({ shelf, books, onMove }) => {
  const bookOnThisShelf = books.filter((book) => book.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookOnThisShelf.map((book) => {
            return (
              <Book
                onMove={onMove}
                key={book.id}
                book={book}
                shelf={shelf.key}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
