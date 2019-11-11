import React, { useContext } from "react";
import { BookContext, IBook } from "../Contexts/BookContext";
import { BookContextReducer } from "../Contexts/BookContextReducer";

interface PropBook {
  book: IBook;
}

const BookDetails: React.FC<PropBook> = ({ book }) => {
  // const { removeBook } = useContext(BookContext);
  const { dispatcher } = useContext(BookContextReducer);
  return (
    <li
      onClick={() =>
        dispatcher({
          type: "REMOVE_BOOK",
          book
        })
      }
    >
      <div className="title">{book.title}</div>
      <div className="title">{book.author}</div>
    </li>
  );
};

export default BookDetails;
