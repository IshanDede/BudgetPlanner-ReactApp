import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <>
      <ul className="list-group">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              category={expense.name}
              cost={expense.cost}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
