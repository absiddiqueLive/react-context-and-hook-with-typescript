import React, { useContext, useState } from "react";
import { BookContext, getId } from "../Contexts/BookContext";
import { BookContextReducer } from "../Contexts/BookContextReducer";
// import { getId } from "../Contexts/BookContext";
// import { BookContextReducer } from "../Contexts/BookContextReducer";

const BookForm: React.FC = () => {
  // const { addBook } = useContext(BookContext);
  const { dispatcher } = useContext(BookContextReducer);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const handdelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatcher({
      type: "ADD_BOOK",
      book: {
        title,
        author,
        id: getId()
      }
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handdelSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setAuthor(event.target.value);
        }}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
