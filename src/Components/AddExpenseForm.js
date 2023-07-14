import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "Add_Expense",
      payload: expense,
    });
    
    setName("");
    setCost("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control my-3"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              required="required"
              type="text"
              className="form-control my-3"
              id="cost"
              value={cost}
              onChange={(event) => {
                setCost(event.target.value);
              }}
            />
          </div>
          {/* <div className="col-sm"> */}
          <div className="row">
            <div className="col-sm">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </form>
    </>
  );
};

export default AddExpenseForm;
