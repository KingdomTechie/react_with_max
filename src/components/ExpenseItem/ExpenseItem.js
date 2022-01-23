import React, { useState } from "react";

import Card from "../Card/Card";
import Date from "../Date/Date";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const onClickHandler = (e) => {
    setTitle(props.title);
  };

  return (
    <li>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
