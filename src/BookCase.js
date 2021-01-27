import BookShelf from "./BookShelf";
import React from "react";
const BookCase = ({ bookshelves, books, onMove }) => {
  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map((shelf) => (
          <BookShelf
            onMove={onMove}
            key={shelf.key}
            shelf={shelf}
            books={books}
          />
        ))}
      </div>
    </div>
  );
};
export default BookCase;
