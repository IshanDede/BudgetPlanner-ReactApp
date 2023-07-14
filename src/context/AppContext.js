import { createContext, useReducer } from "react";

const initialState = {
  budget: 2000,
  expenses: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "Add_Expense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "Delete_Expense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "Edit_Budget":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
