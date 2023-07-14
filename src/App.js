import React from "react";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Expense from "./Components/Expense";
import ExpenseList from "./Components/ExpenseList";
import AddExpenseForm from "./Components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <>
      <AppProvider>
        <div className="container">
          <h1 className="mt-3">Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <Expense />
            </div>
          </div>
          <h2 className="mt-3">Expenses</h2>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h2 className="mt-3">Add Expense</h2>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
};

export default App;
