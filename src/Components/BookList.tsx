import React, { useContext } from "react";
import { BookContext, PropBookContext } from "../Contexts/BookContext";
import BookDetails from "./BookDetails";
import {
  BookContextReducer,
  PropBookReducerContext
} from "../Contexts/BookContextReducer";

const BookList: React.FC = () => {
  // const { books } = useContext<PropBookContext>(BookContext);
  const { books } = useContext<PropBookReducerContext>(BookContextReducer);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Lets enjoy !</div>
  );
};

export default BookList;
