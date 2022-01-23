import React from "react";

import Card from "../Card/Card";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [userSelectedDate, setUserSelectedDate] = useState("");

  const onSelectedDateHandler = (selectedDate) => {
    setUserSelectedDate(selectedDate);
    props.onUserSelectedDate(selectedDate);
  };

  console.log(userSelectedDate);
  const filteredExpenseArr = props.expenses.filter(
    (expense) => expense.date.getFullYear() == userSelectedDate
  );

  let expenseContent = <p>No Expenses found.</p>;

  if (filteredExpenseArr.length > 0) {
    expenseContent = filteredExpenseArr.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={userSelectedDate}
          onSelectedDate={onSelectedDateHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
