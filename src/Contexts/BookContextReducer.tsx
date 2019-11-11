import React, { createContext, useReducer, useEffect, Dispatch } from "react";
import { bookReducer, ActionBookReducer } from "../Reducers/BookReducer";

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

export interface PropBookReducerContext {
  books: IBook[];
  dispatcher: Dispatch<ActionBookReducer>;
}

export const BookContextReducer = createContext({} as PropBookReducerContext);

export const getId = (): number => {
  return Math.floor(Math.random() * 9999 + 1);
};

const BookContextReducerProvider: React.FC = props => {
  const [books, dispatcher] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContextReducer.Provider value={{ books, dispatcher }}>
      {props.children}
    </BookContextReducer.Provider>
  );
};

export default BookContextReducerProvider;
