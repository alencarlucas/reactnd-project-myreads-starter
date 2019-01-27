import React from 'react';
import Book from './Book';

const BooksShelf = ({ shelf, books, shelves }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book shelves={shelves} {...book} key={book.id} />)}
        </ol>
      </div>
    </div>
  )
}

export default BooksShelf;