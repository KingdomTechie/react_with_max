import React from "react";

import Card from "../Card/Card";
import "./Expenses.css";
// import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  // We are creating a date state to dynamically render the appropriate Expenses.
  const [userSelectedDate, setUserSelectedDate] = useState("");

  // This function handles the selected date's state
  const onSelectedDateHandler = (selectedDate) => {
    setUserSelectedDate(selectedDate);
    props.onUserSelectedDate(selectedDate);
  };

  // This new array contains the expenses based on the user's inputed date
  const filteredExpenseArr = props.expenses.filter(
    (expense) => expense.date.getFullYear() == userSelectedDate
  );

  return (
    <div>
      <ExpensesChart expenses = {filteredExpenseArr}/>
      <Card className="expenses">
        <ExpensesFilter
          selected={userSelectedDate}
          onSelectedDate={onSelectedDateHandler}
        />
        <ExpensesList filteredExpenseArr={filteredExpenseArr} />
      </Card>
    </div>
  );
};

export default Expenses;
