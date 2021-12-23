import React from "react"

import Card from "../Card/Card"
import Date from "../Date/Date"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <Date date={props.date}/>
            <div className="expense-item__description"><h2>{props.title}</h2></div>
            <div className="expense-item__price">{props.amount}</div>
        </Card>
        
    )
}

export default ExpenseItem;