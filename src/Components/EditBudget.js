import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input
        type="number"
        className="form-control me-3"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
