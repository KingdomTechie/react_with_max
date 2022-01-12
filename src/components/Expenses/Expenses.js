import React from "react";

import Card from "../Card/Card";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  // const expenseMap = props.expenses.map((expense) => {
  //   return (
  //     <Card>
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     </Card>
  //   );
  //   console.log("Expense encountered");
  // });

  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );

  // <Card className="expenses">
  //   <ExpenseItem
  //     title={props.expenses[0].title}
  //     amount={props.expenses[0].amount}
  //     date={props.expenses[0].date}
  //   />
  //   <ExpenseItem
  //     title={props.expenses[1].title}
  //     amount={props.expenses[1].amount}
  //     date={props.expenses[1].date}
  //   />
  //   <ExpenseItem
  //     title={props.expenses[2].title}
  //     amount={props.expenses[2].amount}
  //     date={props.expenses[2].date}
  //   />
  //   <ExpenseItem
  //     title={props.expenses[3].title}
  //     amount={props.expenses[3].amount}
  //     date={props.expenses[3].date}
  //   />
  // </Card>
};

export default Expenses;
