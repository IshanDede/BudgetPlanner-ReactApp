import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "Edit_Budget",
      payload: value,
    });
    setIsEdit(false);
  };

  return (
    <>
      <div className="alert alert-primary d-flex align-items-center justify-content-between">
        {isEdit ? (
          <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
        ) : (
          <ViewBudget budget={budget} handleEditClick={handleEditClick} />
        )}
      </div>
    </>
  );
};

export default Budget;
