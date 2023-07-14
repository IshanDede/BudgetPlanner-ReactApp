import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const clickHandler = () => {
    dispatch({
      type: "Delete_Expense",
      payload: props.id,
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.category}
        <div>
          <span className="badge text-bg-primary rounded-pill me-3">
            ₹{props.cost}
          </span>
          <TiDelete
            onClick={clickHandler}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              boxShadow: isHovered ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
              // display: "inline-block",
            }}
            size="1.7em"
          ></TiDelete>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
