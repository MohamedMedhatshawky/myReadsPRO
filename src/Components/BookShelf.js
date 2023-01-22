import React from "react";
import Book from "./Book";

export default function BookShelf({ bookList, selectShelfForBook }) {
  const shelfMap = new Map();
  bookList?.forEach((book) => {
    if (shelfMap.has(book.shelf)) {
      shelfMap?.get(book.shelf)?.push(book);
    } else {
      shelfMap?.set(book.shelf, [book]);
    }
  });
  return (
    <div className="list-books-content">
      <div>
        {Array.from(shelfMap?.keys())?.map((k, i) => (
          <div key={i} className="bookshelf">
            <h2 className="bookshelf-title">{k}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelfMap?.get(k).map((b, i) => (
                  <li key={i}>
                    <Book book={b} selectShelfForBook={selectShelfForBook} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
