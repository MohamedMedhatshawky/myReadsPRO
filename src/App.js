import * as BooksAPI from "./BooksAPI";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Search from "./Components/Search";

export default function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    (async () => {
      const books = await BooksAPI.getAll();
      setBookList(books);
    })();
  }, []);

  const selectShelfForBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    const newBookList = bookList?.filter((b) => book.id !== b.id);
    setBookList((prev) => [...newBookList, { ...book, shelf }]);
  };

  //router-
  //navigate btn pages

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main bookList={bookList} selectShelfForBook={selectShelfForBook} />
        }
      />
      <Route
        path="/search"
        element={
          <Search bookList={bookList} selectShelfForBook={selectShelfForBook} />
        }
      />
    </Routes>
  );
}
