import React, { createContext, useState } from "react";

export interface IBook {
  title: string;
  author: string;
  id: number;
}

export interface PropBookContext {
  books: IBook[];
  addBook: (book: IBook) => void;
  removeBook: (id: number) => void;
}

export const BookContext = createContext({} as PropBookContext);

export const getId = (): number => {
  return Math.floor(Math.random() * 9999 + 1);
};

const BookContextProvider: React.FC = props => {
  const [books, setBooks] = useState<IBook[]>([
    { title: "Hello", author: "Some writer", id: getId() },
    { title: "Hello 2 ", author: "Some writer 2", id: getId() }
  ]);

  const addBook = (book: IBook) => {
    setBooks([
      ...books,
      { title: book.title, author: book.author, id: getId() }
    ]);
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book: IBook) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
