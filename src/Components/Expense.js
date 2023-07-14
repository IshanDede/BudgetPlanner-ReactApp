import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Expense = () => {
  const { expenses } = useContext(AppContext);

  const spentTotal = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <>
      <div className="alert alert-danger">
        <span>Spent So Far : ₹{spentTotal}</span>
      </div>
    </>
  );
};

export default Expense;
