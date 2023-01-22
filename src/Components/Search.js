import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./../BooksAPI";

//

export default function Search({ bookList, selectShelfForBook }) {
  const [search, setSearch] = useState("");
  const [searchBooksList, setSearchBooksList] = useState([]);

  useEffect(() => {
    const searchTime = setTimeout(async () => {
      try {
        if (search) {
          const result = await BooksAPI.search(search);

          if (result?.error) {
            setSearchBooksList([]);
          } else {
            result?.forEach((searchBook) => {
              searchBook.shelf = "none";

              bookList.forEach((appBook) => {
                if (searchBook.id === appBook.id) {
                  searchBook.shelf = appBook.shelf;
                }
              });
            });
            debugger;
            setSearchBooksList(result);
          }
        } else {
          setSearchBooksList([]);
        }
      } catch (e) {
        setSearchBooksList([]);
      }
    }, 500);

    return () => {
      clearTimeout(searchTime);
    };
  }, [search, bookList]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooksList &&
            searchBooksList?.map((book) => (
              <Book
                key={book.id}
                book={book}
                selectShelfForBook={selectShelfForBook}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}
