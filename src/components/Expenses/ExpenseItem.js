import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title] = useState(props.title);
  console.log("ExpenseItems evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");

  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
