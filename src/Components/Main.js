import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default function Main({ bookList, selectShelfForBook }) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf
          bookList={bookList}
          selectShelfForBook={selectShelfForBook}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}
