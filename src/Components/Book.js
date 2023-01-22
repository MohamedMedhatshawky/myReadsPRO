import React from "react";

export default function Book({ book, selectShelfForBook }) {
  const selectChangeHanlder = (e) => {
    e.preventDefault();
    selectShelfForBook(book, e.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={book?.shelf} onChange={selectChangeHanlder}>
            <option value="None" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">
        {book?.authors?.map((author) => author)}
      </div>
    </div>
  );
}
