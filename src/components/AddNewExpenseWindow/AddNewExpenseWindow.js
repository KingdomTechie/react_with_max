import React from "react";

import "./AddNewExpenseWindow.css";

const AddNewExpenseWindow = (props) => {
  return (
    <div className="new-expense">
      <div className="new-expense__button">
        <button onClick={props.onClickOpen}>Add New Expense</button>
      </div>
    </div>
  );
};

export default AddNewExpenseWindow;
