import React from "react";
import "./App.css";
// import BookContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import BookContextReducerProvider from "./Contexts/BookContextReducer";
import BookContextProvider from "./Contexts/BookContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <BookContextReducerProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextReducerProvider>
    </div>
  );
};

export default App;
