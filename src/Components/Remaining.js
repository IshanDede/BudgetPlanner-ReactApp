import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    //function and an initial value
    return (total = total + item.cost);
  }, 0);

  const alertType =
    totalExpenses < budget ? "alert-success" : "alert-secondary";

  return (
    <>
      <div className={`alert ${alertType}`}>
        <span>Remaining Budget : ₹{budget - totalExpenses}</span>
      </div>
    </>
  );
};

export default Remaining;
