import { getId, IBook } from "../Contexts/BookContext";

type ReducerAction = "ADD_BOOK" | "REMOVE_BOOK";

export interface ActionBookReducer {
  book: IBook;
  type: ReducerAction;
}

export const bookReducer = (state: IBook[], action: ActionBookReducer) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: getId()
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};
