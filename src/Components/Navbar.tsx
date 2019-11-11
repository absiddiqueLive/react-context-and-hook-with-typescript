import React, { useContext, FunctionComponent } from "react";
import { BookContext, PropBookContext } from "../Contexts/BookContext";
import {
  BookContextReducer,
  PropBookReducerContext
} from "../Contexts/BookContextReducer";

const Navbar: FunctionComponent = () => {
  // const { books } = useContext<PropBookContext>(BookContext);
  const { books } = useContext<PropBookReducerContext>(BookContextReducer);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently you have {books.length} book(s) to get through ... </p>
    </div>
  );
};

export default Navbar;
