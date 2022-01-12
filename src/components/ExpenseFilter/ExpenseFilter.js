import React from 'react';
import { useState } from 'react/cjs/react.development';

import "./ExpenseFilter.css";

const ExpensesFilter = () => {

    const [pickedDate, setPickedDate] = useState("")

    const selectDateHandler = (e) => {
        setPickedDate(e.target.value)
        console.log(pickedDate);
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectDateHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;